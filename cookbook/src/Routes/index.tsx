import React from 'react';
import {
    Route,
    Routes,
  } from "react-router-dom";
import MainLayout from '../Components/Layout';
import Teste from '../Pages/Teste';
import Home from '../Pages/Home';
import ZustandExample from '../Pages/Zustand/Examples';
import ZustandMain from '../Pages/Zustand/Main';
import BoilerplatePage from '../Pages/boilerplate';

  

export const BRouter = () => {
    return(
        <Routes>
            <Route element={<MainLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="/teste" element={<Teste />} />
                <Route path='/zustand'>
                    <Route index element={<ZustandMain />} />
                    <Route path=":id" element={<ZustandExample />} />
                </Route>
                <Route path='/boiler' element={<BoilerplatePage props={{
                    mainTitle: '',
                    aboutText: '',
                    installationTitle: '',
                    installationText: '',
                    npmCode: '',
                    yarnCode: '',
                    usageText: '',
                    howItWorksTitle: '',
                    howItWorksText: '',
                    exampleLinksTitle: '',
                    exampleLinks: []
                }} />}/>
            </Route>
        </Routes>
    )   
}
  
  



