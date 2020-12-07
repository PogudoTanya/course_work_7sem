import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

// import CloseIcon from "components/icons/close.svg";
// import { IconButton } from "components/icon-button/icon-button";
import "./modal.css";

export function Modal(props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      className='modal'
      overlayClassName='modal__overlay'
      ariaHideApp={false}
    >
      <h1 className='modal__Title'>{props.title}</h1>
      <div className='modal__closeButton'>Close</div>
      {props.children}
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
