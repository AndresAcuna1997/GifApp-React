import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifts';

const GifGrid = ({category, limit }) => {

    const [images, setImages] = useState([]);

    const arregloVacio = (categoria)=>{
        if(categoria == ''){
            return (
                <div className='categoria_Vacia_msg'>
                    <h3>Ingresa una categoria para buscar gifs</h3>
                </div>
                )
        }
    };
    useEffect(() => {
        getGifs( category, limit ).then(images =>setImages(images));
    }, [ category ])
    


    return (
        <>
        
        <h3 className=' titulo__categoria animate__animated animate__fadeInUpBig'>{ category }</h3>
         { arregloVacio(category)}
        <div className='centrar'>  
            <div className='card-grid'>
                {
                    images.map( images=> (  // Map no me lee los {} no los use
                        <GifGridItem  key={images.id} {...images}/>
                    ))
                }
            </div> 
        </div>

        </>
    )
}

export default GifGrid
