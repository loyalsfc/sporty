import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Leagues from './pages/Leagues';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path=':countryId' element={<Leagues/>} />
      </Routes>
      <Footer />
    </>
  );
} 

export default App;
