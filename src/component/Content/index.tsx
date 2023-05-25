import React from "react";

import css from "./index.module.css";

export default function Content() {
	return (
		<div className={css.content}>
			<div className={css.container}>
				<div className={css.small1}/>
				<div className={css.small2}/>
				<div className={css.small3}/>

				<div className={css.longLeft}/>

				<div  className={css.bigBlock}/>
			</div>

			<div className={css.bottomContainer}>
				<div className={css.block}/>
				<div className={css.block}/>
				<div className={css.block}/>
			</div>
		</div>
	);
}
