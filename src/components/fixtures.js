import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Context } from '../Context';
import { getLiveScores } from '../utls/utils';
import MatchFeatures from './fixtures/features';

function Fixtures({from, to}) {
    const {key} = useContext(Context)
    const queryClient = useQueryClient();
    const {isPending, isError, data, error} = useQuery({ 
        queryKey: ['livematches', `from=${from}&to=${to}`], 
        queryFn: ()=>getLiveScores(`from=${from}&to=${to}`)
    })

    if(isPending){
        return <p>Loading...</p>
    }

    if(isError){
        return <span>Error: {error.message}</span>
    }

    function groupByCountryId() {
        const groupedData = {
            England: [],
            Spain: [],
            Italy: [],
            Germany: [],
            France: [],
            Netherland: []
        };
      
        data.forEach(item => {
          const countryId = item.country_name;
            if (!groupedData[countryId]) {
                groupedData[countryId] = [];
            }
            groupedData[countryId].push(item);
        });
      
        return groupedData;
    }

    const sortContries = () => {
        const contries = ["44", "Spain", "France", "Germany", "Italy", "Netherland", "Mexico", "Russia", "Portugal", "Turkey", "Austria", "Poland", "Brazil", "Scotland", "Greece", "Norway"];
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