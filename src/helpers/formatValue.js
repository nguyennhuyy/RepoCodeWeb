export const getAvatarName = user => {
	if (user && user.fullname && user.fullname.length > 0) {
		let data = `${user.fullname.slice(0, 1)}${user.fullname.slice(
			user.fullname.indexOf(" "),
			user.fullname.indexOf(" ") + 2
		)}`;
		data = data.toUpperCase();
		return data.split(" ").join("");
	}
	return "";
};
