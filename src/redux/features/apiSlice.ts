'use client';

import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { url } from '@/constants/globalValues';
import { getValidAuthTokens, setAuthCookie } from '@/lib/cookies';

const mutex = new Mutex();

const REMOVE_USER_ACTION_TYPE = 'user/removeUser';


const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    await mutex.waitForUnlock();

    const baseQuery = fetchBaseQuery({
        baseUrl: url,
        credentials: 'include',
        prepareHeaders: (headers,) => {
            const token = getValidAuthTokens();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },    
    });

    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshResult = await baseQuery(
                    {
                        url: '/api/v1/auth/refresh',
                        method: 'POST'
                    },
                    api,
                    extraOptions
                );

                if (refreshResult && refreshResult.data && typeof refreshResult.data === 'object') {
                    const data = refreshResult.data as { token: string; refreshToken: string };
                    setAuthCookie(data.token, 'auth_token', 60 * 2); 
                    setAuthCookie(data.refreshToken, 'refresh_token', 60 * 60 * 24 * 7);

                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch({type: REMOVE_USER_ACTION_TYPE});
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    refetchOnFocus: true,
    endpoints: (builder) => ({}), 
    keepUnusedDataFor: 0
});
