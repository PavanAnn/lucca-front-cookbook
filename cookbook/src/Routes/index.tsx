import React from 'react';
import Home from '../Pages/Home';
import {
    Route,
    Routes,
  } from "react-router-dom";
import MainLayout from '../Components/Layout';

  

export const BRouter = () => {
    return(
        <Routes>
            <Route element={<MainLayout />} >
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}
  
  



