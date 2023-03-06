import { memo } from "react";
import { Text } from "./styles";
const WebText = ({ children, fontSize, fontWeight }) => {
	return (
		<Text fontSize={fontSize} fontWeight={fontWeight}>
			{children}
		</Text>
	);
};

export default memo(WebText);
