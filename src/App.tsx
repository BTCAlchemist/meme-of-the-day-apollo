import React from 'react';
import Web3 from 'web3';
import Header from './components/Header';
import Content from './components/Content';
import './css/App.css';

const App: React.FC = () => {
  return(
    <div>
        <Header />
        <Content />
      </div>);
};

export default App;
