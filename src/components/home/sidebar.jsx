import React from 'react'
import { getCountries, queryEndpoint } from '../../utls/utils'
import { useQuery } from '@tanstack/react-query'
import "./sidebar.css"
import { Link, useParams } from 'react-router-dom'

const topContries = [
    {
        "country_id": "44",
        "country_name": "England",
        "country_logo": "https:\/\/apiv3.apifootball.com\/badges\/logo_country\/44_england.png"
    },
    {
        "country_id": "6",
        "country_name": "Spain",
        "country_logo": "https:\/\/apiv3.apifootball.com\/badges\/logo_country\/6_spain.png"
    },
    {
        "country_id": "4",
        "country_name": "Germany",
        "country_logo": "https:\/\/apiv3.apifootball.com\/badges\/logo_country\/4_germany.png"
    },
    {
        "country_id": "5",
        "country_name": "Italy",
        "country_logo": "https:\/\/apiv3.apifootball.com\/badges\/logo_country\/5_italy.png"
    },
    {
        "country_id": "3",
        "country_name": "France",
        "country_logo": "https:\/\/apiv3.apifootball.com\/badges\/logo_country\/3_france.png"
    },
    {
        "country_id": "82",
        "country_name": "Netherlands",
        "country_logo": "https:\/\/apiv3.apifootball.com\/badges\/logo_country\/82_netherlands.png"
    },
]

function Sidebar() {
    const {countryId} = useParams();
    console.log(countryId);
    const {isPending, isError, data, error} = useQuery({ 
        queryKey: ['countries', "action=get_countries"], 
        queryFn: ()=> queryEndpoint("action=get_countries") 
    })
   
    if(isPending){
        return (
            <div className='loader-wrapper'><p className='loader' /></div>
        )
    }

    if(isError){
        return <p>An error occured</p>
    }

    const otherCountries = data.filter(item => !topContries.some(country => country.country_id === item.country_id))
    const countries = [...topContries, ...otherCountries]

    return (
            <ul className='country_sidebar'>
                <li className='country_list ' >
                    <Link to="/" className='text-white country_list_link'>Home</Link>
                </li>
                {countries.map(item => {
                    return(
                        <li className='country_list' key={item.country_id}>
                            <Link to={`/${item.country_id}`} className={`${countryId === item.country_id ? "selected-country" : "text-white"} country_list_link`}>{item.country_name}</Link>
                            {item.country_id === countryId && <Competitions countryId={countryId}/>}
                        </li>
                    )
                })}
            </ul>
    )
}

function Competitions({countryId}){
    const leagueQuery = `action=get_leagues&country_id=${countryId}`

    const {isPending, isError, data, error} = useQuery({ 
        queryKey: ['leagues', leagueQuery], 
        queryFn: ()=> queryEndpoint(leagueQuery) 
    })

    if(isPending) return;

    return(
        <ul className='country-competitions'>
            {data?.map(item => {
                return(
                    <li key={item.league_id}>
                        <Link 
                            to={`/${countryId}/${item.league_id}`}
                            className='text-white competition-list'
                        >
                            {item.league_name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Sidebar