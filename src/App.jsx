import React from "react";
import './App.css';
import Header from './components/header/header'; 
import Home from './pages/home'; 
import Login from './pages/login/login';
import Register from './pages/cadastro/cadastrar'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header /> 
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
