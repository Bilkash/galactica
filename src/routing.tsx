import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";

import { HomePage, LoginPage } from "./pages";

export const routing = createBrowserRouter([
	{
		path: "/",
		element: <HomePage/>,
		loader:  async () => {
			const auth = localStorage.getItem("auth");
			if (!auth) {
				return redirect("/login");
			}
			return null;
		}
	},
	{
		path: "/login",
		element: <LoginPage/>,
	}
]);
