import utils from "~/utils/apiUtils";
export const contactSupportApi = (email, subject, message) => {
	return utils.post("client/support/contact", {
		email,
		subject,
		message
	});
};
