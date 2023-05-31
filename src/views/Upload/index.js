import { useNavigate } from "react-router-dom";
import { memo, useState } from "react";
import { useActions } from "~/hooks/useActions";
import UploadScreen from "./view";

import { mediaRemoveBackgroundSubmit } from "~/redux/actions/mediaActions";
const UploadView = () => {
	const navigate = useNavigate();
	const actions = useActions({ mediaRemoveBackgroundSubmit });
	const [imageOrigin, setImageOrigin] = useState();
	const [imageRemoved, setImageRemoved] = useState();
	const [activeAlert, setActiveAlert] = useState(false);
	const [descriptionAlert, setDescriptionAlert] = useState();
	const onRemoveBg = data => {
		let opt = {
			data: data.imageRemove,
			callback: res => {
				const { result, origin } = res;
				setImageRemoved(result.base64img);
				setImageOrigin(origin);
			},
			errorCb: res => {
				if (res) {
					setActiveAlert(true);
					setDescriptionAlert("Remove faulty background");
				}
			}
		};

		actions.mediaRemoveBackgroundSubmit({ ...opt });
	};

	const callbackRefreshData = data => {
		if (data) {
			setImageRemoved("");
			setImageOrigin("");
		}
	};

	const callbackSetActiveAlert = data => {
		if (data) {
			setActiveAlert(false);
		}
	};
	return (
		<UploadScreen
			onRemoveBg={onRemoveBg}
			imageOrigin={imageOrigin}
			imageRemoved={imageRemoved}
			callbackRefreshData={callbackRefreshData}
			activeAlert={activeAlert}
			descriptionAlert={descriptionAlert}
			callbackSetActiveAlert={callbackSetActiveAlert}
		/>
	);
};

export default memo(UploadView);
