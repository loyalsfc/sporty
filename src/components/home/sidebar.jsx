import React from 'react'
import { getCountries } from '../../utls/utils'
import { useQuery } from '@tanstack/react-query'
import "./sidebar.css"

function Sidebar() {
    const {isPending, isError, data, error} = useQuery({ queryKey: ['countries'], queryFn: getCountries })
    if(isPending){
        return <p>Loading...</p>
    }

    if(isError){
        return <p>An error occured</p>
    }
    console.log(data)
    return (
        <div>
            <ul className='country_sidebar'>
                {data.map(item => {
                    return(
                        <li className='country_list' key={item.country_id}>
                            {item.country_name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar