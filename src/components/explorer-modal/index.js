import React, { Component } from 'react';
import './explorer.css';

class ExplorerModal extends Component {
  render() {
    return (
      <section className="explorer-modal">
        <header className="explorer-modal-header">
          <h1 className="explorer-title">Title</h1>
          <a href="#" className="explorer-close">
            <span className="sprite sprite-close"></span>
          </a>
        </header>
        <section className="explorer-modal-subheader">
          <h2 className="explorer-subtitle">Label</h2>
        </section>
        <div className="explorer-modal-body">

        </div>
        <footer className="explorer-modal-footer">
          <a href="#">Link</a>
          <button type="button" className="button">Done</button>
        </footer>
      </section>
    );
  }
}

export default ExplorerModal;
