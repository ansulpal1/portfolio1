import React, { useState } from 'react';
import Modal from 'react-modal';
import './ComingSoon.css';

const ComingSoonModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setShowSurprise(false); // Reset surprise state when modal is closed
  };

  const handleClick = () => {
    setShowSurprise(!showSurprise);
  };

  return (
    <div>
      <a onClick={openModal} className="btn primary">Demo</a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Coming Soon"
        className="coming-soon-modal"
        overlayClassName="coming-soon-modal-overlay"
      >
        <div className="coming-soon-container">
          <div className="coming-soon-message">
            <h1>🚧 Coming Soon 🚧</h1>
            <p>We're working hard to bring you something awesome!</p>
            <button onClick={handleClick}>
              {showSurprise ? 'Hide Surprise' : 'Show Surprise'}
            </button>
            <button onClick={closeModal} className="back-home-button">
              Close
            </button>
          </div>
          {showSurprise && (
            <div className="surprise animate__animated animate__bounceIn">
              <pre>
                {`
                 \\(o_o)/
                  /|\\
                   |
                  / \\
                  `}
              </pre>
              <p>Hang in there, it's almost ready!</p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ComingSoonModal;
