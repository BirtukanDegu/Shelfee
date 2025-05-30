import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteCookie } from 'cookies-next';
import { authApiSlice } from "../services/authApiSlice";
import { getAuthCookie, setAuthCookie } from "@/lib/cookies";

interface AuthState {
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: User;
  isAuthenticated?: boolean;  
}

const initialState: AuthState = {
  token: "",
  refreshToken: "",
  tokenExpires: 0,
  user: {
    id: 0,
    email: "",
    provider: "",
    socialId: "",
    firstName: "",
    lastName: "",
    photo: "",
    role: "",
    status: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
  },
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.tokenExpires = action.payload.tokenExpires;
      state.user = {
        id: action.payload.user.id,
        email: action.payload.user.email,
        provider: action.payload.user.provider,
        socialId: action.payload.user.socialId,
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName,
        photo: action.payload.user.photo, 
        role: action.payload.user.role, 
        status: action.payload.user.status,
        createdAt: action.payload.user.createdAt,
        updatedAt: action.payload.user.updatedAt,
        deletedAt: action.payload.user.deletedAt,
      };
      state.isAuthenticated = true;
    },

    removeUser: (state) => {
      deleteCookie('auth_token');
      deleteCookie('refresh_token');
      state.token = "";
      state.refreshToken = "";
      state.tokenExpires = 0;
      state.user = initialState.user;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApiSlice.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          setAuthCookie(payload.token, 'auth_token', 60 * 2); 
          setAuthCookie(payload.refreshToken, 'refresh_token', 60 * 60 * 24 * 7);
          state.token = payload.token;
          state.refreshToken = payload.refreshToken;
          state.tokenExpires = payload.tokenExpires;
          state.user = {
            id: payload.user.id,
            email: payload.user.email,
            provider: payload.user.provider,
            socialId: payload.user.socialId,
            firstName: payload.user.firstName,
            lastName: payload.user.lastName,
            photo: payload.user.photo, 
            role: payload.user.role, 
            status: payload.user.status,
            createdAt: payload.user.createdAt,
            updatedAt: payload.user.updatedAt,
            deletedAt: payload.user.deletedAt,
          };
          state.isAuthenticated = true;
        }
      )
      .addMatcher(
        authApiSlice.endpoints.googleLogin.matchFulfilled,
        (state, { payload }) => {
          setAuthCookie(payload.token, 'auth_token', 60 * 2); 
          setAuthCookie(payload.refreshToken, 'refresh_token', 60 * 60 * 24 * 7);
          state.token = payload.token;
          state.refreshToken = payload.refreshToken;
          state.tokenExpires = payload.tokenExpires;
          state.user = {
            id: payload.user.id,
            email: payload.user.email,
            provider: payload.user.provider,
            socialId: payload.user.socialId,
            firstName: payload.user.firstName,
            lastName: payload.user.lastName,
            photo: payload.user.photo, 
            role: payload.user.role, 
            status: payload.user.status,
            createdAt: payload.user.createdAt,
            updatedAt: payload.user.updatedAt,
            deletedAt: payload.user.deletedAt,
          };
          state.isAuthenticated = true;
        }
      )      
      .addMatcher(
        authApiSlice.endpoints.getAuthData.matchFulfilled,
        (state, { payload }) => {
          state.token = getAuthCookie('auth_token') || "";
          state.refreshToken = getAuthCookie('refresh_token') || "";
          state.tokenExpires = payload.tokenExpires;
          state.user = {
            id: payload.id,
            email: payload.email,
            provider: payload.provider,
            socialId: payload.socialId,
            firstName: payload.firstName,
            lastName: payload.lastName,
            photo: payload.photo, 
            role: payload.role, 
            status: payload.status,
            createdAt: payload.createdAt,
            updatedAt: payload.updatedAt,
            deletedAt: payload.deletedAt,
          };
          state.isAuthenticated = true;
        }
      )
  },
});

export const { setAuthUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
