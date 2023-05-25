import { UserType } from "../types";
import { user } from "../mock";

export default function getUser(): Promise<UserType> {
	return new Promise((resolve) => {
		resolve(user);
	});
}
