import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer/footer";
import React from "react";
import IndexProject from "./components/Project";
import Header from "./components/Header/header";
import Accueil from "./components/Accueil/accueil";
import header from "./assets/images/header.jpg";
import { Routes, Route, Link } from "react-router-dom";
import CreationGraphiqueApp from "./components/ServicesDetail/CreationGraphique/CreationGraphiqueApp";
import NavBar from "./components/Navbar/navbar";
import AccueilApp from "./components/Accueil/AccueilApp";
import CommunityManagementApp from "./components/ServicesDetail/CommunityManagement/CommunityManagementApp";
import StrategieCommunicationApp from "./components/ServicesDetail/StrategieCommunication/StrategieCommunicationApp";

function App() {
    const title = "Votre freelance en communication dans tous l'est de la France ";
    const text = "Création de site Internet & référencement naturel, Graphisme, Community Management, Stratégies de communication, .."
  return (

    <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<AccueilApp />}/>
            <Route path="/creation-graphique" element={<CreationGraphiqueApp />}/>
            <Route path="/community-management" element={<CommunityManagementApp />} />
            <Route path="/strategie-communication" element={<StrategieCommunicationApp />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
