import React from "react";
import { useSelector } from "react-redux";

import AvatarPng from "../../assets/avatar.png";
import css from "./index.module.css";

export default function User() {
	const user = useSelector((state) => state.auth.user);

	if (user) {
		return (
			<div className={css.wrapper}>
				<div className={css.nameWrapper}>
					<div className={css.name}>
						{user.name}
					</div>

					<div className={css.role}>
						{user.role}
					</div>
				</div>

				<div className={css.avatarWrapper}>
					<img src={AvatarPng} alt={"avatar"}/>

					<div className={css.online}/>
				</div>

			</div>
		);
	}
}
