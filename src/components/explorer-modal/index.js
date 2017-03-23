import React, { Component } from 'react';
import Node from '../node';
import './explorer.css';

const tree = {
  title: "howdy",
  childNodes: [
    {title: "bobby"},
    {title: "zzz", childNodes: [
      { title: "aaa" }
    ]},
    {title: "suzie", childNodes: [
      {title: "puppy", childNodes: [
        {title: "dog house"}
      ]},
      {title: "cherry tree"}
    ]}
  ]
};

export default class ExplorerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  selectFile(fileId) {
    const selectedFile = this.state.selectedFile === fileId ? null : fileId;
    this.setState({ selectedFile });
  }

  render() {
    return (
      <section className="explorer-modal">
        <header className="explorer-modal-header">
          <h1 className="explorer-title">Title</h1>
          <a href="#" className="explorer-close">
            <span className="sprite sprite-close" />
          </a>
        </header>
        <section className="explorer-modal-subheader">
          <h2 className="explorer-subtitle">Label</h2>
        </section>
        <div className="explorer-modal-body">
          <Node
            node={tree}
            selectFile={this.selectFile}
            selectedFile={this.state.selectedFile}
          />
        </div>
        <footer className="explorer-modal-footer">
          <a href="#">Link</a>
          <button type="button" className="button">Done</button>
        </footer>
      </section>
    );
  }
}
