import React from "react";

import logoSvg from "../../assets/logo.svg";
import css from "./index.module.css";

export default function Logo() {
	return (
		<div className={css.logoWrapper}>
			<img src={logoSvg} alt={"Logo"}/>
		</div>
	);
}
