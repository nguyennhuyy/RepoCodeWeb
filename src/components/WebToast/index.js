import { memo } from "react";
import WebText from "../WebText";
import { BoxError, BoxErrorWarning, BoxErrorError } from "./styles";
import { IconToastWarning, IconToastSuccess } from "~/assets/path";
import { COLOR } from "~/utils/appConst";
const WebToast = ({ title, type }) => {
	return (
		<>
			{type === "success" && (
				<BoxError>
					<IconToastSuccess />
					<WebText margin={"0 0 0 10px"} color={COLOR.WHITE_0} fontSize={18}>
						{title}
					</WebText>
				</BoxError>
			)}
			{type === "warning" && (
				<BoxErrorWarning>
					<IconToastWarning />
					<WebText margin={"0 0 0 10px"} color={COLOR.WHITE_0} fontSize={18}>
						{title}
					</WebText>
				</BoxErrorWarning>
			)}
			{type === "error" && (
				<BoxErrorError>
					<IconToastWarning />
					<WebText margin={"0 0 0 10px"} color={COLOR.WHITE_0} fontSize={18}>
						{title}
					</WebText>
				</BoxErrorError>
			)}
		</>
	);
};

export default memo(WebToast);
