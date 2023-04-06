import { Modal } from "@mui/material";
import React, { memo } from "react";
import { ContainerModal } from "./styles";
const WebModal = ({ open, onClose }) => {
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'>
			<ContainerModal id='modal-modal-title'>Hello</ContainerModal>
		</Modal>
	);
};

export default memo(WebModal);
