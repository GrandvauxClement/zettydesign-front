import './App.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import CreationGraphiqueApp from "./components/ServicesDetail/CreationGraphique/CreationGraphiqueApp";
import NavBar from "./components/Navbar/navbar";
import AccueilApp from "./components/Accueil/AccueilApp";
import CommunityManagementApp from "./components/ServicesDetail/CommunityManagement/CommunityManagementApp";
import Contact from "./components/Contact/Contact";
import ProjectDetail from "./components/ProjectDetail";
import {Fab} from "@mui/material";
import {KeyboardArrowUp} from "@mui/icons-material";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import theme from "./theme";
import Footer from "./components/Footer/footer";
import RedactionArticleWeb from "./components/ServicesDetail/RedactionArticleWeb/RedactionArticleWebApp";
import CreationSiteWebApp from "./components/ServicesDetail/CreationSiteWeb/CreationSiteWebApp";
import MentionsLegales from "./components/MentionsLegales/mentionsLegales";
import Error404 from "./components/Error404/Error404";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (

    <div className="App" id="back-to-top-anchor">
        <NavBar />
        <Routes>
            <Route path="/redaction-article-web" element={<RedactionArticleWeb/>}/>
            <Route path="/creation-site-web" element={<CreationSiteWebApp/>}/>
            <Route path="/design-graphique" element={<CreationGraphiqueApp/>}/>
            <Route path="/community-management" element={<CommunityManagementApp />} />
            <Route path="/mes-realisations" element={<ProjectDetail />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/qui-suis-je" element={<Presentation />} />
            <Route path="/" element={<AccueilApp />}/>
            <Route path="/*" element={<Error404 />} />
        </Routes>
        <Contact />
        <Footer/>
        <ScrollToTop >
            <Fab sx={{
                backgroundColor: theme.palette.primary.dark,
                color: "white",
                '&:hover': {
                    backgroundColor: "#275f90",
                    color: "white",
                }
            }} size="small" aria-label="scroll back to top">
                <KeyboardArrowUp />
            </Fab>
        </ScrollToTop>
    </div>
  );
}

export default App;
