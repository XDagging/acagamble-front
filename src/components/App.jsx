import React from "react";
import Index from "./Index"
import Login from "./Login"
import Signup from "./Signup"
import Main from "./Main"
import {BrowserRouter, Routes,Route} from "react-router-dom"



export default function App(props) {




    return (

        <>
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/main" element={<Main />} />
               

            </Routes>
        </BrowserRouter>
        </>
    )
}