import React from "react";

import ArrowSvg from "../../assets/ArrowDown.svg";
import NotificationSvg from "../../assets/Icon_Notification.svg";
import css from "./index.module.css";
import User from "../User";

export default function SideHeader() {
	return (
		<div className={css.wrapper}>
			<div className={css.lang}>
				<div>
					EN
				</div>

				<img src={ArrowSvg} alt={"Arrow"} />
			</div>

			<img src={NotificationSvg} alt={"Notification"}/>

			<User/>
		</div>
	);
}
