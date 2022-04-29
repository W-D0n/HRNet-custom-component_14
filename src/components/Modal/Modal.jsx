import React from "react";
import "./Modal.css"

export const Modal = ({ component, closeAction, clickOutsideAction }) => {
  return (
    <div onClick={clickOutsideAction}>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          {component}
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={closeAction}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  )
}