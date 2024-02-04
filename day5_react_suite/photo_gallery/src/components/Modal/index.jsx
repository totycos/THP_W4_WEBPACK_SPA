import React from 'react'
import './index.scss'

const Modal = ({ data, onClose }) => {

    const { alt_description, urls, user } = data;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <img className="modal-image" src={urls.regular} alt={alt_description} />
                <p>Alt Description: {alt_description}</p>
            </div>
        </div>
    )
}

export default Modal