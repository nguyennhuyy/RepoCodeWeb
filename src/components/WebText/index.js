import { memo } from "react";
import { Text } from "./styles";
const WebText = ({
	children,
	fontSize,
	fontWeight,
	color,
	margin,
	textAlign,
	colorLink,
	style,
	onClick
}) => {
	return (
		<Text
			onClick={() => {
				onClick && onClick();
			}}
			fontSize={fontSize}
			fontWeight={fontWeight}
			color={color}
			margin={margin}
			textAlign={textAlign}
			colorLink={colorLink}
			style={style}>
			{children}
		</Text>
	);
};

export default memo(WebText);
