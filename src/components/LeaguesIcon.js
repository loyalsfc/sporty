import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css";



function LeaguesIcon(){
    const key = '5e3582a7d8d1a741f870124c02aaa88abb97f126b697a05112d549c4302c9c7e';
    const [leaguesData, setleaguesData] = useState([]);
    const selectedCountries = ["England", "Spain", "France", "Germany", "Italy", "Netherland", "Mexico", "Russia", "Portugal", "Saudi Arabia", "Brazil", "Turkey", "Slovenia", "Austria", "Poland", "Bulgaria", "Scotland", "Greece", "Norway"]
    
    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_countries&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setleaguesData(data))
    }, [])

    let flags = leaguesData.map(items => {
        if(selectedCountries.includes(items.country_name)){
            return <Link to={items.country_id} key={items.country_id}>
                        <img src={items.country_logo} width={100} height={50} className='country-flags' />
                    </Link>
        }
    })

    return(
        <div className="flags-container bg-primary py-1">
            <div className="container mx-auto">
                <div className="flags-wrapper">
                    {flags}
                </div>
            </div>
        </div>
    )
}

export default LeaguesIcon