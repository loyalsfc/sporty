import React from "react"

export function Cards({color}){
    return(
        <svg height={15} width={10} viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg"> 
            <rect x="10" y="10" width="80" height="130" fill={color} />
        </svg>
    )
}