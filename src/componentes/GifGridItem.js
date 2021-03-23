import React from 'react'

const GifGridItem = ({titulo, url}) => {

    return (
        <div className='card animate__animated animate__fadeInUpBig'>
            <img src={url} alt={titulo}></img>
            <p>{titulo}</p>
        </div>
    )
}

export default GifGridItem
