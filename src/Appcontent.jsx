import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Backgroundtwo from './components/backgroundTwo';
import Header from './components/Header';
import Options from './components/options';
import Test from './components/test';
import Compare from './components/compare';
import Output1 from './components/output1'
import Output2 from './components/output2';
import Alldistricts from './components/alldistricts';
const AppContent = () => {
  const location = useLocation();
  const isTestPage = location.pathname === '/test';
  const isTestPage2 = location.pathname === '/compare';
  const isTestpage3 = location.pathname === '/output1';
  const isTestpage4 = location.pathname === '/output2';
  const isTestpage5 = location.pathname === '/alldistricts';
  
  return (
    <>
      <Header />
      {!isTestPage&& !isTestPage2  && !isTestpage3&& !isTestpage4 &&!isTestpage5 &&<Backgroundtwo />} {/* Conditionally render Backgroundtwo */}
      <Routes>
        <Route path="/compare" element={<Compare />} /> 
        <Route path="/test" element={<Test/>} /> 
        <Route path="/output1" element={<Output1/>} /> 
        <Route path="/output2" element={<Output2/>} />
        <Route path="/alldistricts" element={<Alldistricts/>} />
        

      </Routes>
    </>
  );
};

export default AppContent;
