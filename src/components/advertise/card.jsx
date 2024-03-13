import React from 'react'

function Card({img, title, note}) {
    return (
        <li>
            <img
                src={img}
            />
            <h4>{title}</h4>
            <p>{note}</p>
        </li>
    )
}

export default Card