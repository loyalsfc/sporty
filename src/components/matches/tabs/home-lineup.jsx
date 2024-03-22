import React, { useMemo } from 'react'
import { Cards } from '../../icons/icons';
import { IoMdFootball } from "react-icons/io";
import { FaArrowAltCircleDown } from "react-icons/fa";

function HomeLineup({system, starting_lineups, arrMethod, cards, goalscorer, substitutions}) {
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

    const height = (100 / (eachSystem.length + 1)) + "%";
    
    return (
        // <div>
            <ul className='pitch-home-players-wrapper'>
                {formattedLineupToSystem.map((item, index) => {
                    return (
                        <li key={index} className={`pitch-home-player-positions`} style={{height}}>
                            {item.map((player, playerIndex) => {
                                return(
                                    <div key={playerIndex} className='lineups'>
                                        <div className='pitch-player-number'>
                                            {cards.some(card => (card.home_player_id === player.player_key || card.away_player_id === player.player_key) && card.card === "yellow card") && <span className='pitch-player-yellow'><Cards color={'#FFFF00'} /></span>}
                                            {cards.some(card => (card.home_player_id === player.player_key || card.away_player_id === player.player_key) && card.card === "red card") && <span className='pitch-player-red'><Cards color={'#FF0000'} /></span>}
                                            {goalscorer.some(scorer => scorer.home_scorer_id === player.player_key || scorer.away_scorer_id === player.player_key) && <span className='pitch-player-goal'><IoMdFootball /></span>}
                                            {goalscorer.some(scorer => (scorer.home_scorer_id === player.player_key || scorer.away_scorer_id === player.player_key) && (scorer.home_scorer.includes("(o.g.)") || scorer.away_scorer.includes("(o.g.)" ))) && <span className='pitch-player-owngoal'><IoMdFootball /></span>}
                                            {substitutions.some(substitute => substitute.substitution_player_id.includes(player.player_key)) && <span className='pitch-player-out absolute'><FaArrowAltCircleDown /></span>}
                                            {player.lineup_number}
                                        </div>
                                        <span className='pitch-player-name'>{player.lineup_player}</span>
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