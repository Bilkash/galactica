import React from "react";

import SearchSvg from "../../assets/Search.svg";
import css from "./index.module.css";

export default function Search() {
	return (
		<div className={css.searchWrapper}>
			<img src={SearchSvg} alt={"Search"}/>
		</div>
	);
}
