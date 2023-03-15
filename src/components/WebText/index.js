import { memo } from "react";
import { Text } from "./styles";
const WebText = ({
	children,
	fontSize,
	fontWeight,
	color,
	margin,
	textAlign,
	colorLink
}) => {
	return (
		<Text
			fontSize={fontSize}
			fontWeight={fontWeight}
			color={color}
			margin={margin}
			textAlign={textAlign}
			colorLink={colorLink}>
			{children}
		</Text>
	);
};

export default memo(WebText);
