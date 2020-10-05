import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import styles from './Components/styles.module.css'
import Navigation from './Components/Navigation'
import Subcontent from './Components/Subcontent'
import Advertisement from './Components/Advertisement'
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Navigation/>
      <Main>
        <Subcontent/>
        <Subcontent/>
        <Subcontent/>
        <Advertisement/>

      </Main>
      
      
    </div>
  );
}

export default App;
