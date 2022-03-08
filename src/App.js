import './App.css';
import Footer from "./components/Footer/footer";
import React from "react";
import { Routes, Route} from "react-router-dom";
import CreationGraphiqueApp from "./components/ServicesDetail/CreationGraphique/CreationGraphiqueApp";
import NavBar from "./components/Navbar/navbar";
import AccueilApp from "./components/Accueil/AccueilApp";
import CommunityManagementApp from "./components/ServicesDetail/CommunityManagement/CommunityManagementApp";
import StrategieCommunicationApp from "./components/ServicesDetail/StrategieCommunication/StrategieCommunicationApp";
import Contact from "./components/Contact/Contact";

function App() {
  return (

    <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<AccueilApp />}/>
            <Route path="/creation-graphique" element={<CreationGraphiqueApp/>}/>
            <Route path="/community-management" element={<CommunityManagementApp />} />
            <Route path="/strategie-communication" element={<StrategieCommunicationApp />} />
        </Routes>
        <Contact />
        <Footer/>
    </div>
  );
}

export default App;
