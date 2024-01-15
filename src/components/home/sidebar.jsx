import React from 'react'
import { getCountries } from '../../utls/utils'
import { useQuery } from '@tanstack/react-query'
import "./sidebar.css"
import { Link } from 'react-router-dom'

function Sidebar() {
    const {isPending, isError, data, error} = useQuery({ queryKey: ['countries'], queryFn: getCountries })
    if(isPending){
        return (
            <p>Loading...</p>
        )
    }

    if(isError){
        return <p>An error occured</p>
    }
    
    return (
            <ul className='country_sidebar'>
                <li className='country_list' >
                    <Link to="/" className='text-white'>Home</Link>
                </li>
                {data.map(item => {
                    return(
                        <li className='country_list' key={item.country_id}>
                            {item.country_name}
                        </li>
                    )
                })}
            </ul>
    )
}

export default Sidebar