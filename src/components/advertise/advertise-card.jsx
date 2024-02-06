import React from 'react'

function AdvertiseCard({img, title, note}) {
    return (
        <div className='advertise-sample-card'>
            <img
                src={img}
                className='advertise-sample-image'
            />
            <h4>{title}</h4>
            <p>{note}</p>
        </div>
    )
}

export default AdvertiseCard