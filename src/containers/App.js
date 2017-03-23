import React from 'react';
import ExplorerModal from '../components/explorer-modal';
import image from './mockup.png';
import './app.css';
import './sprites.css';

export default function App() {
  return (
    <section className="app">
      <img src={image} alt="" style={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-48%, -80px)'
      }}/>
      <ExplorerModal />
    </section>
  );
}
