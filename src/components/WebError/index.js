import { Button } from "@mui/material";
import { useState } from "react";
import { IconClose } from "~/assets/path";
import { COLOR } from "~/utils/appConst";
import WebText from "../WebText";
import { BoxError } from "./styles";
const WebError = ({ error }) => {
	const [closeError, setCloseError] = useState(true);
	const closeErrorFunc = () => setCloseError(false);
	return (
		<>
			{closeError && error && (
				<BoxError>
					<WebText color={COLOR.PINK_1} margin={"0"}>
						{error}
					</WebText>
					<Button
						sx={{
							margin: 0,
							padding: 0,
							minWidth: "max-content"
						}}
						onClick={closeErrorFunc}>
						<IconClose />
					</Button>
				</BoxError>
			)}
		</>
	);
};
export default WebError;
