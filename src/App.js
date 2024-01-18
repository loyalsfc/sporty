import React from 'react';
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Leagues from './pages/Leagues';
import Standing from './pages/Standing';
import TopScorers from './pages/TopScorers';
import Club from './pages/Clubs';
import PlayerStatistics from './pages/Players';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/home';
import Matchdetails from './pages/matchdetails';
import LiveMatch from './pages/liveMatch';
import Competition from './pages/competition';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Header /> */}
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/:countryId' element={<Leagues/>} />
        <Route path='/:countryId/:leagueId' element={<Competition/>} />
        <Route path='/:countryId/:leagueId/matches/:matchId' element={<Matchdetails/>} />
        <Route path='/matches/live' element={<LiveMatch/>} />
        <Route path='standing' element={<Standing />}/>
        <Route path='top-scorers' element={<TopScorers />} />
        <Route path="clubs/:clubId" element={<Club />} />
        <Route path="/players/:playerKey" element={<PlayerStatistics />} />
      </Routes>
      {/* <Footer /> */}
    </QueryClientProvider>
  );
} 

export default App;
