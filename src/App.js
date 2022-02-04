import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer/footer";
import React from "react";
import IndexProject from "./components/Project";
import Header from "./components/Header/header";
import Accueil from "./components/Accueil/accueil";

function App() {
  return (

    <div className="App">
      <Header />
      <header className="App-header">
          <IndexProject />
      </header>
        <Accueil />
      <Footer/>
    </div>
  );
}

export default App;
