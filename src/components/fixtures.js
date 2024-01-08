import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Context } from '../Context';
import { getLiveScores } from '../utls/utils';

function Fixtures() {
    const {key} = useContext(Context)
    const queryClient = useQueryClient();
    const {isPending, isError, data, error} = useQuery({ queryKey: ['livematches'], queryFn: getLiveScores })

    if(isPending){
        return <p>Loading...</p>
    }

    if(isError){
        return <span>Error: {error.message}</span>
    }

    console.log(data.find(item => item.match_hometeam_name === "OH Leuven"))
    return (
        <div className='scores-wrapper'>
            <div className='container mx-auto'>
                <ul>
                    {data.map((item) => {
                        return(
                            <li className='score-card' key={item.match_id}>
                                {item.match_live === "1" && item.match_status !== "Finished" && item.match_status !== "Half Time" && <div className='live-match' />}
                                {item.match_status === "Finished" && <span className='match-status'>FT</span>}
                                {item.match_status === "" && <span className='match-status'>{item.match_time}</span>}
                                {item.match_status === "Half Time" && <span className='match-status'>HT</span>}
                                {item.match_status === "Cancelled" && <span className='match-status'>Canc.</span>}
                                {item.match_status === "Postponed" && <span className='match-status'>Posp.</span>}
                                {item.match_status === "After Pen." && <span className='match-status'>Pen.</span>}
                                {item.match_status === "After ET" && <span className='match-status'>AET.</span>}
                                <span className='match-teams home-team'>{item.match_hometeam_name}</span> 
                                <span className='match-score'>{item.match_hometeam_score} - {item.match_awayteam_score}</span> 
                                <span className='match-teams'>{item.match_awayteam_name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Fixtures