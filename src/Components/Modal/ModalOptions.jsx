import React, { useEffect } from 'react';
import './ModalOptions.css';

const ModalOptions = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-options">
                    <button className="option-button report">Report</button>
                    <button className="option-button unfollow">Unfollow</button>
                    <button className="option-button add-to-favorites">Add to favorites</button>
                    <button className="option-button go-to-post">Go to post</button>
                    <button className="option-button share">Share to...</button>
                    <button className="option-button copy-link">Copy link</button>
                    <button className="option-button embed">Embed</button>
                    <button className="option-button about-this-account">About this account</button>
                    <button className="option-button cancel" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ModalOptions;
