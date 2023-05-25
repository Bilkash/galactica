import { createSlice, Draft } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { UserType } from "../../types";

export interface AuthState {
  auth: boolean;
  user: UserType | null;
}

const initialState: AuthState = {
	auth: false,
	user: null
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logIn: (state: Draft<AuthState>) => {
			state.auth = true;
		},
		logOut: (state: Draft<AuthState>) => {
			state.auth = false;
		},
		setUser: (state: Draft<AuthState>, action: PayloadAction<UserType>) => {
			state.user = action.payload;
		}
	},
});

export const { logIn, logOut, setUser } = authSlice.actions;

export default authSlice.reducer;
