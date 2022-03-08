import React from "react";
import closeIcon from "../images/icons8-close.svg";
import { CSSTransition } from "react-transition-group";

function Modal({ isModal, resetModal, content }) {
	return (
		<CSSTransition
			timeout={500}
			in={isModal}
			unmountOnExit={true}
			classNames={"modal-animate"}
		>
			<div className="modal">
				<div className={`modal-backdrop`}></div>
				<div className={`modal-card`}>
					<button className="reset-modal-btn" onClick={resetModal}>
						<img
							src={closeIcon}
							alt="close button"
							className="reset-modal-icon"
						/>
					</button>
					{content}
				</div>
			</div>
		</CSSTransition>
	);
}

export default Modal;
