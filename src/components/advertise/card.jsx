import React from 'react'

function Card({img, title, note}) {
    return (
        <li>
            <img
                src={img}
            />
            <h5>{title}</h5>
            <p>{note}</p>
        </li>
    )
}

export default Card