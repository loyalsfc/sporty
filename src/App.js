import React from 'react';
import { Routes, Route } from "react-router-dom"
import Standing from './pages/Standing';
import TopScorers from './pages/TopScorers';
import PlayerStatistics from './pages/Players';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Wrapper from './components/wrapper';
import Team from './components/team/team'; 
import CompetitionPage from './components/competition/competition';
import Main from './components/home/main';
import CountryCompetitions from './components/country/country-competitions';
import LiveMatches from './components/live-matches/live-matches';
import Match from './components/matches/Match';
import Advertise from './components/advertise/advertise';
import MobileApp from './components/mobile-app/mobile-app';
import ContactUs from './components/contact-us/contact-us';
import AboutUs from './components/about-us/about-us';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route exact path='/' element={<Wrapper Main={Main}/>} />
        <Route path='/advertise' element={<Advertise/>} />
        <Route path="/mobile-app" element={<MobileApp/>}/>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/:countryId' element={<Wrapper Main={CountryCompetitions}/>} />
        <Route path='/:countryId/:leagueId' element={<Wrapper Main={CompetitionPage}/>} />
        <Route path='/:countryId/:leagueId/matches/:matchId' element={<Wrapper Main={Match}/>} />
        <Route path='/matches/live' element={<Wrapper Main={LiveMatches} />} />
        <Route path='standing' element={<Standing />}/>
        <Route path='top-scorers' element={<TopScorers />} />
        <Route path="/teams/:teamId" element={<Wrapper Main={Team} />} />
        <Route path="/players/:playerKey" element={<Wrapper Main={PlayerStatistics} />} />
      </Routes>
    </QueryClientProvider>
  );
} 

export default App;
