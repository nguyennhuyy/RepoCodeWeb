import utils from "~/utils/apiUtils";
export const signInApi = (email, password, remember) => {
	return utils.post("client/auth/login", { email, password, remember });
};
