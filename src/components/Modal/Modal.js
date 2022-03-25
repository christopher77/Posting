import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = ({ children }) =>
	ReactDOM.createPortal(
		<>
			<div className="modal"></div>
			<div className="card">{children}</div>
		</>,
		document.getElementById("modal-root")
	);
export default Modal;
