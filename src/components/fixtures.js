import { useQuery} from '@tanstack/react-query'
import React from 'react'
import { formatDate, queryEndpoint } from '../utls/utils';
import MatchFeatures from './fixtures/features';
import { useSearchParams } from 'react-router-dom';

function Fixtures({isLive, countryId}) {
    const [searchParams] = useSearchParams();
    const date = searchParams.get("date")
    const fromDate = date ?? formatDate(new Date());
    const toDate = date ?? formatDate(new Date())
    const calculateDatePeriod = () => {
        const date = new Date();
        const currentMonth = date.getMonth() + 1;
        const year = date.getFullYear()
        const endOfMonth = new Date(year, currentMonth, 0).getDate();
        return{
            from: `${year}-${currentMonth.toString().padStart(2, "0")}-01`,
            to: `${year}-${currentMonth.toString().padStart(2, "0")}-${endOfMonth}`,
        }
    }
    const url = `action=get_events&from=${fromDate}&to=${toDate}${isLive ? "&match_live=1" : ""}${countryId ? `&country_id=${countryId}` : ""}`
    const {isPending, isError, data} = useQuery({ 
        queryKey: ['livematches', url], 
        queryFn: ()=>queryEndpoint(url)
    })

    if(isPending){
        return <div className='loader-wrapper'><p className='loader' /></div>
    }

    if(isError){
        return <span>An error Occured</span>
    }

    if(!Array.isArray(data)){
        return <p className='no-match'>No Match Available for selected queries</p>
    }
    
    const matches = isLive ? data.filter(item => item.match_status !== "Finished") : [...data]

    function groupByCountryId() {
        const groupedData = {
            England: [],
            Spain: [],
            Italy: [],
            Germany: [],
            France: [],
            Netherland: []
        };
      
        matches.forEach(item => {
          const countryId = item.country_name;
            if (!groupedData[countryId]) {
                groupedData[countryId] = [];
            }
            groupedData[countryId].push(item);
        });
      
        return groupedData;
    }

    const sortContries = () => {
        const sortedObject = [];

        for (const [key, value] of Object.entries(groupByCountryId())) {
            sortedObject.push({[key]: value})
        }
        return sortedObject
    }

    return (
        <div className='scores-wrapper'>
            <div className='container mx-auto no-padding'>
                <ul>
                    {sortContries().map((item, index) => {
                        return <MatchFeatures key={index} country_fixtures={item} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Fixtures