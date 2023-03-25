import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "~/hooks/useActions";
import { otherSupportSubmit } from "~/redux/actions/otherActions";
import SupportView from "./view";
const SupportScreen = () => {
	const actions = useActions({
		otherSupportSubmit
	});
	const navigate = useNavigate();
	const handleSupportContact = data => {
		let obj = {
			email: data.email,
			subject: data.subject,
			message: data.message,
			callback: res => {
				navigate("/dashboard");
			},
			errorCb: data => {}
		};
		actions.otherSupportSubmit({ ...obj });
	};
	return <SupportView onSupport={handleSupportContact} />;
};

export default memo(SupportScreen);
