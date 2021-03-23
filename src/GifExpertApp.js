import React, { useState } from 'react'
import AddCategeria from './componentes/AddCategeria'
import GifGrid from './componentes/GifGrid'



const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Rock']);
    const [limit, setLimit] = useState(9);

    /*   const handleAdd = () =>{
           setCategorias([...categorias, 'K-Pop']);
       }  */

    console.log(limit);
    return (
        <>
        <div className='primeraSeccion'>
            <h1>Gif Expert App</h1>
            <AddCategeria categorias={categorias} limit={limit} setCategorias={setCategorias} setLimite={setLimit} /> 
        </div>
            <ul>
                {
                    categorias.map((categoria) => {
                        console.log(limit)
                        return (                            // Doble parentesis o no renderiza
                            <GifGrid key={categoria} category={categoria} limit={ limit }/>
                        )
                    })
                }
            </ul>
        </>
    )
}


export default GifExpertApp
