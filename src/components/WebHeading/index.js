import { memo } from "react";
import { Heading } from "./styles";
const WebHeading = ({ children, fontSize, fontWeight, color, margin }) => {
	return (
		<Heading
			fontSize={fontSize}
			fontWeight={fontWeight}
			color={color}
			margin={margin}>
			{children}
		</Heading>
	);
};

export default memo(WebHeading);
