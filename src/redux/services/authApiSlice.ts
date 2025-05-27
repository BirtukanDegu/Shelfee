"use client";

import { apiSlice } from "../features/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/api/v1/auth/email/login",
        method: "POST",
        body: { email, password },
      }),
    }),

    register: builder.mutation({
      query: ({
        firstName,
        lastName,
        email,
        password,
      }) => ({
        url: "/api/v1/auth/email/register",
        method: "POST",
        body: {
          firstName,
          lastName,
          email,
          password,
        },
      }),
    }),

    activateAccount: builder.mutation({
      query: () => ({
        url: "/api/v1/auth/email/confirm",
        method: "POST",
      }),
    }),

    getAuthData: builder.query<User, { token: string }>({
      query: ({ token }) => ({
        url: '/api/v1/auth/me',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/api/v1/auth/logout",
        method: "POST",
      }),
    }),

    forgotPassword: builder.mutation({
      query: ({ email }) => ({
        url: `/api/v1/auth/forgot/password`,
        method: "POST",
        body: { email },
      }),
    }),

    checkResetPassword: builder.query({
      query: (id) => `/api/v1/auth/reset/${id}`,
    }),

    changePassword: builder.mutation({
      query: ({ old_password, new_password }) => ({
        url: `/api/v1/auth/reset/password`,
        method: "POST",
        body: { old_password, new_password },
      }),
    }),

  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useActivateAccountMutation,
  useGetAuthDataQuery,
  useLogoutMutation,
  useForgotPasswordMutation,
  useCheckResetPasswordQuery,
  useChangePasswordMutation,
} = authApiSlice;
