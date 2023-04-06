import { memo } from "react";
import { Heading } from "./styles";
const WebHeading = ({
	children,
	fontSize,
	fontWeight,
	color,
	margin,
	textAlign,
	styles
}) => {
	return (
		<Heading
			fontSize={fontSize}
			fontWeight={fontWeight}
			color={color}
			margin={margin}
			textAlign={textAlign}
			style={styles}>
			{children}
		</Heading>
	);
};

export default memo(WebHeading);
