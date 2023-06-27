// import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';
import CameraChartData from './components/CameraChartData';

// import { useEffect, useState } from 'react';
import socketIO from "socket.io-client";
import ClientDisconnected from './components/ClientDisconnected';
const ENDPOINT = "http://127.0.0.1:4001";

const socket = socketIO(ENDPOINT, {})

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <header className="App-header">
        <div className='App-header-2'>
          <p>EMPTY</p>
        </div>
      </header>
      <div className='footer-bar'>
        <CameraChartData socket={socket} />
        <ClientDisconnected socket={socket} />
      </div>
    </div>
  );
}

export default App;