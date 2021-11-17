import React from "react"
import modalOverlayStyles from './modal-overlay.module.css'
import { modalOverlayTypes } from "../../utils/types"

function ModalOverlay(props) {
	return (
		<div id="overlay" onClick={props.onClick} className={modalOverlayStyles.modaloverlay}>
			{props.children}
		</div>
	)
}

ModalOverlay.propTypes = modalOverlayTypes;

export default ModalOverlay;