import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import css from "./index.module.css";
import { Content, Logo, Search, SideHeader, SideMenu } from "../../component";
import { setUser } from "../../redux/slices/authSlice";
import getUser from "../../requests/getUser";

export default function HomePage() {
	const auth = Boolean(localStorage.getItem("auth"));
	const dispatch = useDispatch();

	useEffect(() => {
		if (auth) {
			getUser().then(user => {
				dispatch(setUser(user));
			});
		}
	}, [auth, dispatch]);

	return (
		<div>
			<header className={css.header}>
				<Logo/>

				<Search/>

				<SideHeader/>
			</header>

			<div className={css.content}>
				<aside className={css.sidebar}>
					<SideMenu/>
				</aside>

				<Content/>
			</div>
		</div>
	);
}

