import { TextField } from "@mui/material";
import { COLOR } from "~/utils/appConst";
import WebText from "../WebText";
const WebInput = ({
	label,
	variant = "outlined",
	type,
	value,
	onChange,
	error,
	messageError,
	styles,
	touched
}) => {
	return (
		<>
			<TextField
				label={label}
				variant={variant}
				value={value}
				type={type}
				onChange={e => onChange(e.target.value)}
				sx={styles}
			/>
			{(!!touched || error) && (
				<WebText
					WebText
					margin={"0 0 10px 0"}
					fontSize={12}
					color={COLOR.RED_0}>
					{messageError}
				</WebText>
			)}
		</>
	);
};

export default WebInput;
