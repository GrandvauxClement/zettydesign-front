import logo from './logo.svg';
import './App.css';
import NavBar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import React from "react";
import IndexProject from "./components/Project";

function App() {
  return (

    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <IndexProject />
      </header>
      <Footer/>
    </div>
  );
}

export default App;
