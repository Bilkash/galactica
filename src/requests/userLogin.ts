import { user, authToken } from "../mock";

interface AuthResponse {
	token: string;
}

export function userLogin(email: string, password: string): Promise<AuthResponse> {
	return new Promise((resolve, reject) => {
		if (email === user.email && password === user.password) {
			setTimeout(() => {
				const response: AuthResponse = {
					token: authToken,
				};
				resolve(response);
			}, 1000);
		} else {
			reject(new Error("Something went wrong :("));
		}
	});
}
