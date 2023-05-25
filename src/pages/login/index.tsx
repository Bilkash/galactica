import React, { useState } from "react";
import { ErrorMessage, Form, Formik, Field } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userLogin } from "../../requests/userLogin";
import css from "./index.module.css";
import { logIn } from "../../redux/slices/authSlice";

interface LoginFormValues {
	email: string;
	password: string;
}

const validationSchema = object({
	email: string().email("Incorrect email").required("Required email"),
	password: string().required("Required password"),
});


export default function LoginPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loginError, setLoginError] = useState(null);

	const handleSubmit = (values: LoginFormValues) => {
		userLogin(values.email, values.password)
			.then((response) => {
				localStorage.setItem("authToken", response.token);
				localStorage.setItem("auth", "true");
				navigate("/");
				dispatch(logIn());
			})
			.catch(e => setLoginError(e.message));
	};

	return (
		<div className={css.formWrapper}>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className={css.form}>
					<div className={css.inputWrapper}>
						<div className={css.fieldWrapper}>
							<label htmlFor="email">Email</label>
							<Field
								className={css.field}
								type="email"
								id="email"
								name="email"
								placeholder={"Email"}
							/>
							<ErrorMessage
								name="email"
								component="div"
								className={css.error}
							/>
						</div>

						<div  className={css.fieldWrapper}>
							<label htmlFor="password">Password</label>
							<Field
								className={css.field}
								type="password"
								id="password"
								name="password"
								placeholder={"Password"}
							/>
							<ErrorMessage
								name="password"
								component="div"
								className={css.error}
							/>
						</div>
					</div>

					{loginError ? (
						<div className={css.errorWrapper}>
							{loginError}
						</div>
					) : null}

					<button className={css.button} type="submit">Login</button>
				</Form>
			</Formik>
		</div>
	);
}
