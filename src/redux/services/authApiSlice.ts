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

    googleLogin: builder.mutation<
      { token: string; refreshToken: string; tokenExpires: number; user: User }, 
      { idToken: string } 
    >({
      query: ({ idToken }) => ({
        url: '/api/v1/auth/google/login',
        method: 'POST',
        body: { idToken },
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

    getAuthData: builder.query({
      query: () => ({
        url: '/api/v1/auth/me',
        method: 'GET'
      }),
    }),

    logout: builder.mutation({
      query: () => "/api/v1/auth/logout"
    }),

    forgotPassword: builder.mutation({
      query: ({ email }) => ({
        url: `/api/v1/auth/forgot/password`,
        method: "POST",
        body: { email },
      }),
    }),

    checkResetPassword: builder.mutation({
      query: ({ hash }) => ({
       url:  `/api/v1/auth/forgot/password/validate-hash`,
       method: "POST",
       body: { hash },
      })
    }),

    changePassword: builder.mutation({
      query: ({ password, hash }) => ({
        url: `/api/v1/auth/reset/password`,
        method: "POST",
        body: { password, hash },
      }),
    }),

  }),
});

export const {
  useLoginMutation,
  useGoogleLoginMutation,
  useRegisterMutation,
  useActivateAccountMutation,
  useGetAuthDataQuery,
  useLogoutMutation,
  useForgotPasswordMutation,
  useCheckResetPasswordMutation,
  useChangePasswordMutation,
} = authApiSlice;
