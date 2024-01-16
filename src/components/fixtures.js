import { useQuery} from '@tanstack/react-query'
import React from 'react'
import { formatDate, queryEndpoint } from '../utls/utils';
import MatchFeatures from './fixtures/features';
import { useSearchParams } from 'react-router-dom';

function Fixtures({isLive}) {
    const [searchParams] = useSearchParams();
    const date = searchParams.get("date")
    const url = `action=get_events&from=${date ?? formatDate(new Date())}&to=${date ?? formatDate(new Date())}${isLive ? "&match_live=1" : ""}`
    const {isPending, isError, data, error} = useQuery({ 
        queryKey: ['livematches', url], 
        queryFn: ()=>queryEndpoint(url)
    })

    if(isPending){
        return <div className='loader-wrapper'><p className='loader' /></div>
    }

    if(isError || !Array.isArray(data)){
        return <span>An error Occured</span>
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
            <div className='container mx-auto'>
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