import React, { useState } from 'react'
import PropTypes from 'prop-types'



const AddCategeria = ({setCategorias , setLimite,  limit }) => {

    const [inputValue, setinputValue] = useState('Ingrese una categoria');

    const handleInputText = ( texto ) =>{
        setinputValue(texto.target.value);
    }

    const handleInputValue = ( number ) =>{
        setLimite(number.target.value);
    }

    const vaciarTextInput = ( ) =>{
        if(inputValue === 'Ingrese una categoria'){
            setinputValue('');
        }   
    }

    const handleEnter = ( e ) =>{
         e.preventDefault();
         if(inputValue.trim().length > 2){
            setCategorias( cats => [inputValue,...cats] ); //Toma el ultimo del arreglo por que no lo llame
            setinputValue('');
         }

    }
    return (
        <>
        <div className='subtitulo'>
            <h2>Añadir categoria</h2>
        </div>
        <form onSubmit={ handleEnter }>
        <input type='text' value= { inputValue } onChange={ handleInputText } onClick={ vaciarTextInput }></input>
        <input type='number' value={ limit } onChange={ handleInputValue }></input>
        <button onClick={ handleEnter }>Buscar</button>
        </form>
        </>
    )
}

AddCategeria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategeria
