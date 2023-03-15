import * as Yup from "yup";
export const LOGIN_FORM_SCHEME = Yup.object().shape({
	email: Yup.string()
		.matches(
			/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm,
			"Email is not valid"
		)
		.required("Require email"),
	password: Yup.string()
		.min(6, "Password up to 6 characters")
		.required("Require password")
});
