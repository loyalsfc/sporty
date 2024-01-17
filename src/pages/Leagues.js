import React, {useEffect, useState, useContext} from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom"
import News from "../components/home/news";
import LiveMatches from "../components/live-matches/live-matches";
import Sidebar from "../components/home/sidebar";
import CountryCompetitions from "../components/country/country-competitions";

function Leagues(){
    return(
        <div className='home-page-wrapper'>
            <aside className='country_sidebar_wrapper'>
                <Sidebar />
            </aside>
            <main className='main-container'>
                <CountryCompetitions />
            </main>
            <aside className='country_sidebar_wrapper'>
                <News />
            </aside>

        </div>
    )
}

export default Leagues