import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeSvg from "../../assets/Home.svg";
import CoursesSvg from "../../assets/Courses.svg";
import LibrariesSvg from "../../assets/Libraries.svg";
import StatisticsSvg from "../../assets/Statistics.svg";
import UsersGuidelineSvg from "../../assets/Users_guideline.svg";
import LogOutSvg from "../../assets/Logout.svg";
import { logOut } from "../../redux/slices/authSlice";
import css from "./index.module.css";


export default function SideMenu() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogOut = () => {
		dispatch(logOut());
		navigate("/login");
		localStorage.removeItem("authToken");
		localStorage.removeItem("auth");
	};

	return (
		<div>
			<div className={css.wrapper_active}>
				<img className={css.icon} src={HomeSvg} alt={"Home"}/>

				<div className={css.text_active}>{"Home"}</div>
			</div>

			<div className={css.wrapper}>
				<img className={css.icon} src={CoursesSvg} alt={"Courses"}/>

				<div className={css.text}>{"Courses"}</div>
			</div>

			<div className={css.wrapper}>
				<img className={css.icon} src={LibrariesSvg} alt={"Libraries"}/>

				<div className={css.text}>{"Libraries"}</div>
			</div>

			<div className={css.wrapper}>
				<img className={css.icon} src={StatisticsSvg} alt={"Statistics"}/>

				<div className={css.text}>{"Statistics"}</div>
			</div>

			<div className={css.divider}/>

			<div className={css.wrapper}>
				<img className={css.icon} src={UsersGuidelineSvg} alt={"Users guideline"}/>

				<div className={css.text}>{"Users guideline"}</div>
			</div>

			<div className={css.logOut} onClick={() => handleLogOut()}>
				<div className={css.wrapper}>
					<img className={css.icon} src={LogOutSvg} alt={"Users guideline"}/>

					<div className={css.text}>{"Sign Out"}</div>
				</div>
			</div>
		</div>
	);
}
