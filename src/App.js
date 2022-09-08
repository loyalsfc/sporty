import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Leagues from './pages/Leagues';
import Standing from './pages/Standing';
import TopScorers from './pages/TopScorers';
import Club from './pages/Clubs';
import PlayerStatistics from './pages/Players';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path=':countryId' element={<Leagues/>} />
        <Route path='standing' element={<Standing />}/>
        <Route path='top-scorers' element={<TopScorers />} />
        <Route path="standing/:clubId" element={<Club />} />
        <Route path="/top-scorers/:playerKey" element={<PlayerStatistics />} />
      </Routes>
      <Footer />
    </>
  );
} 

export default App;
