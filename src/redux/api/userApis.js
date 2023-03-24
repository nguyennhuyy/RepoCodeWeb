import utils from "~/utils/apiUtils";
export const userUpload = file => {
	return utils.uploadFile("user/media/cloud/upload", file, "image");
};
export const userUpdateInfo = (avatar, fullname, birthday, gender, address) => {
	return utils.post("user/me/update", {
		avatar,
		fullname,
		birthday,
		gender,
		address
	});
};
