import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Preloader from "./Preloader";
import Header from './components/Header';
import Backgroundtwo from "./components/BackgroundTwo";
import Test from './components/test';
import './App.css';
import Appcontent from "./Appcontent";
import Compare from "./components/compare";
import Output1 from './components/output1';
import Output2 from './components/output2';
import Alldistricts from "./components/alldistricts";

// Component that handles the routing and conditional rendering
const AppContent = () => {
  const location = useLocation();
  const isTestPage = location.pathname === '/test';
  const isTestPage2 = location.pathname === '/compare';
  const isTestPage3 = location.pathname === '/output1';
  const isTestpage4 = location.pathname === '/output2';
  const isTestpage5 = location.pathname === '/alldistricts';
  return (
    <>
      <Header />
      {!isTestPage && !isTestPage2 &&!isTestPage3&& !isTestpage4 &&!isTestpage5  && <Backgroundtwo />}
      <Routes>
        <Route path="/compare" element={<Compare />} /> 
        <Route path="/test" element={<Test />} /> 
        <Route path="/output1" element={<Output1/>} />
        <Route path="/output2" element={<Output2/>} />
        <Route path="/alldistricts" element={<Alldistricts/>} />
         </Routes>
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
          
          body {
            font-family: 'Playfair Display', system-ui;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
          }
          
          .playfair-display-uniquifier {
            font-family: 'Playfair Display', system-ui;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
          }
        `}
      </style>

      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Appcontent />
        </Router>
      )}
    </div>
  );
};

export default App;
