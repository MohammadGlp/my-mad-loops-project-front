import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSessionSlice = createSlice({
  name: "authSession",
  initialState,
  reducers: {
    logInSession: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOutSession: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const selectSessionCurrentUser = (state) => state.authSession.user;

export const selectSessionToken = (state) => state.authSession.token;

export const { logInSession, logOutSession } = authSessionSlice.actions;

export default authSessionSlice.reducer;
