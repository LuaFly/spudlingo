import React from "react";
import './App.css';
import Header from './components/header/header'; 
import Home from './pages/home'; 
import Inicio from './pages/pos_login/inicio'; 
import Login from './pages/login/login';
import Cadastrar from './pages/cadastro/cadastrar'; 
import Feed from "./pages/pos_login/feed";

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import PrivateRoute from './components/PrivateRoute'; // <== importa aqui

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header /> 
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/cadastrar" element={<Cadastrar />} />

                    {/* Rotas protegidas */}
                    <Route 
                        path="/inicio" 
                        element={
                            <PrivateRoute>
                                <Inicio />
                            </PrivateRoute>
                        } 
                    />
                    <Route 
                        path="/feed" 
                        element={
                            <PrivateRoute>
                                <Feed />
                            </PrivateRoute>
                        } 
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
