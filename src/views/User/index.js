import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { useActions } from "~/hooks/useActions";
import UserScreen from "./view";
import { userUpdateInfoSubmit } from "~/redux/actions/userActions";
const UserView = () => {
	const navigate = useNavigate();
	const actions = useActions({ userUpdateInfoSubmit });
	const handleUpdate = data => {
		const opt = {
			avatar: data.avatar,
			fullname: data.fullname,
			birthday: data.birthday,
			gender: data.gender,
			address: data.address,
			callback: data => {
				if (data) {
					navigate("/dashboard");
				}
			},
			errorCb: () => {}
		};
		actions.userUpdateInfoSubmit({ ...opt });
	};
	return <UserScreen onUpdate={handleUpdate} />;
};

export default memo(UserView);
