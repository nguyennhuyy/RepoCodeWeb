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
	const onRemoveBg = data => {
		let opt = {
			data: data.imageRemove,
			callback: res => {
				const { result, origin } = res;
				setImageRemoved(result.base64img);
				setImageOrigin(origin);
			},
			errorCb: res => {}
		};

		actions.mediaRemoveBackgroundSubmit({ ...opt });
	};

	const callbackRefreshData = data => {
		if (data) {
			setImageRemoved("");
			setImageOrigin("");
		}
	};
	return (
		<UploadScreen
			onRemoveBg={onRemoveBg}
			imageOrigin={imageOrigin}
			imageRemoved={imageRemoved}
			callbackRefreshData={callbackRefreshData}
		/>
	);
};

export default memo(UploadView);
