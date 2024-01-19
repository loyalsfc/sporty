import React from "react";
import News from "../components/home/news";
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