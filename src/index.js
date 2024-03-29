import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import BackOfficeContainer from "./components/BackOffice/BackOfficeContainer";
import {SnackbarProvider} from "notistack";

const container =  document.getElementById('root');
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <Routes>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/admin" element={<BackOfficeContainer />}/>
                        <Route path="*" element={<App />}/>
                    </Routes>
                </SnackbarProvider>
            </ThemeProvider>
        </React.StrictMode>
    </BrowserRouter>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
