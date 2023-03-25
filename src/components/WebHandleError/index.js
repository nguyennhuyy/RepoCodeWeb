import WebText from "../WebText";
import { BoxError, ContainerErr } from "./styles";
const WebHandleError = () => {
	return (
		<BoxError>
			<ContainerErr>
				<WebText>Helllo</WebText>
			</ContainerErr>
		</BoxError>
	);
};

export default WebHandleError;
