import React, { memo } from "react";
import WebText from "~/components/WebText";
import { COLOR } from "~/utils/appConst";
import { BoxAvatar } from "./styles";
const listColor = ["#007BFF", "#0F892F", "#AF4464", "#FA8A2E", "#986D6A"];

const WebAvatar = ({ item, children, onClick }) => {
	const index = item.charCodeAt(0) % listColor.length;
	return (
		<BoxAvatar
			listColor={listColor}
			index={index}
			onClick={() => {
				onClick && onClick();
			}}>
			<WebText
				textAlign={"center"}
				margin={"0"}
				color={COLOR.WHITE_0}
				fontSize={18}
				fontWeight={"600"}>
				{item}
			</WebText>
			{children}
		</BoxAvatar>
	);
};

export default React.memo(WebAvatar);
