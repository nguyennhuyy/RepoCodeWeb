import { memo } from "react";
import { Heading } from "./styles";
const WebHeading = ({
	children,
	fontSize,
	fontWeight,
	color,
	margin,
	textAlign
}) => {
	return (
		<Heading
			fontSize={fontSize}
			fontWeight={fontWeight}
			color={color}
			margin={margin}
			textAlign={textAlign}>
			{children}
		</Heading>
	);
};

export default memo(WebHeading);
