import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staus: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.staus = true;
      state.userData = action.payload;
    },
    logOut: (state) => {
      state.staus = false;
      state.userData = null;
    },
  },
});

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;
