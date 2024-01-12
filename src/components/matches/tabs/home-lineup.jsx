import React, { useMemo } from 'react'

function HomeLineup({system, starting_lineups, arrMethod}) {
    const eachSystem = system.split("-");

    const formattedLineupToSystem = useMemo(() => {
        const lineups = [...starting_lineups];
        const goalKeeper = lineups.splice(0, 1)
        const formatted = [goalKeeper]
        eachSystem.forEach(item => {
            const lineupItems = lineups.splice(0, item);
            formatted[arrMethod](lineupItems)
        })
        return formatted;
    }, [system, starting_lineups])

    console.log(formattedLineupToSystem);
    const height = (100 / (eachSystem.length + 1)) + "%"
    
    return (
        // <div>
            <ul className='pitch-home-players-wrapper'>
                {formattedLineupToSystem.map((item, index) => {
                    return (
                        <li key={index} className={`pitch-home-player-positions`} style={{height}}>
                            {item.map((player, playerIndex) => {
                                return(
                                    <div key={playerIndex} className='lineups'>
                                        {player.lineup_player}
                                    </div>
                                )
                            })}
                        </li>
                    )
                })}
            </ul>
        // </div>
    )
}

export default HomeLineup