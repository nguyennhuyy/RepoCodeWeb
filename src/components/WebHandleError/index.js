import { memo, useEffect, useState } from "react";
import WebText from "../WebText";
import { BoxError, ContainerErr, BoxIconClose } from "./styles";
import { IconClosePopup } from "~/assets/path";
const WebHandleError = ({ title, description, warning }) => {
	return (
		<>
			<BoxError>
				<ContainerErr warning={warning}>
					<WebText fontWeight={500} margin={"0"}>
						{title}
					</WebText>
					<WebText fontSize={16} margin={"0 "}>
						{description}
					</WebText>
				</ContainerErr>
				<BoxIconClose>x</BoxIconClose>
			</BoxError>
		</>
	);
};

export default memo(WebHandleError);
