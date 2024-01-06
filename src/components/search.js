import React, { useContext, useRef, useState } from 'react'
import { Context } from '../Context'

function Search({setLeagueName}) {
    const searchRef = useRef(null)
    const [leaguesSearch, setleaguesSearch] = useState('');
    const {leagues, setLeagueId} = useContext(Context)
    const [active, setActive] = useState(0);
    const [searches, setSearches] = useState('');

    function getLeagueId(event){
        setLeagueId(event.target.getAttribute("data-league-id"))
        setLeagueName(event.target.getAttribute("data-league-name"))
        setSearches('')
    }

    const filter = league => league.league_name.toLowerCase().includes(leaguesSearch.toLowerCase())

    function keyboardNavigation(event){
        if(event.code === "ArrowDown" || event.code === "ArrowUp"){
            event.preventDefault();
            if(event.code === "ArrowDown"){
                scrollDown()
            } else {
                scrollUp()
            }
        } else if(event.code === "Enter"){
            const league = leagues.filter(filter).find((item, index) => active === index + 1)
            setLeagueId(league.league_id);
            setLeagueName(league.league_name)
            searchRef.current.blur()
            setActive(0);
        }
    }

    function scrollDown(){
        if(active === 0 || leagues.filter(filter).length === active){
            setActive(1)
        } else {
            setActive(prevState => prevState + 1);
        }
    }

    function scrollUp(){
        if(active === 1 || active === 0){
            setActive(leagues.filter(filter).length)
        }else {
            setActive(prevState => prevState - 1);
        }
    }

    window.onclick = function(event){
        if(event.target !== document.querySelector('.search-result') && searches !== ''){
            setSearches("");
            setActive(0);
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        setleaguesSearch(value)
        if(value === ""){
            setActive(0)
        }
    }

    return (
        <div className="search-container">
            <div className="search-wrapper">
                <input 
                    type="text" 
                    id="search-league" 
                    name="search-league" 
                    className="search-league" 
                    onChange={handleChange}
                    onBlur={()=>{
                        setleaguesSearch("");
                        setActive(-1)
                    }}
                    onKeyDown={keyboardNavigation}
                    value={leaguesSearch}
                    ref={searchRef}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="search-result">
                {leagues.filter(filter).map((result, index) => {
                    if(leaguesSearch !== ""){
                        return <div 
                                    key={result.league_id} 
                                    data-league-id={result.league_id}
                                    data-league-name={result.league_name}
                                    onClick={getLeagueId}
                                    style={{backgroundColor: index + 1 === active ? "rgba(255, 255, 255, 0.3)" : ""}}
                                >
                                    {result.country_name + " " + result.league_name}
                                </div>
                    }
                })}
            </div>
        </div>
    )
}

export default Search