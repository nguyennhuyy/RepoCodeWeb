import { memo } from "react";
import { Text } from "./styles";
const WebText = ({ children, fontSize, fontWeight, color, margin }) => {
	return (
		<Text
			fontSize={fontSize}
			fontWeight={fontWeight}
			color={color}
			margin={margin}>
			{children}
		</Text>
	);
};

export default memo(WebText);
