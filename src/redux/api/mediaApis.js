import utils from "~/utils/apiUtils";
export const mediaUpload = file => {
	return utils.uploadFile("user/media/cloud/upload", file, "image");
};
export const removeBg = url => {
	return utils.post("user/media/removebg", {
		url
	});
};
