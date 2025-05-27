import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: User;
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
    },

    removeUser: (state) => {
      state.token = "";
      state.refreshToken = "";
      state.tokenExpires = 0;
      state.user = initialState.user;
    },
  },
});

export const { setAuthUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
