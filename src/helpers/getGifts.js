import PropTypes from 'prop-types'

export const getGifs = async( categoria, limite=10 )=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=${limite}&api_key=wUxOguEmuPHpvAucLQH4icPeyeKhk2Hd`;

    const respuesta = await fetch( url );
    const { data } = await respuesta.json();
    
    const dataGifs = data.map( informacion => {
        return{
            id:informacion.id,
            titulo:informacion.title,
            url:informacion.images?.downsized_medium.url
        }
    })

    return dataGifs;
}

getGifs.propTypes = {
    categoria: PropTypes.string.isRequired,
    limite:PropTypes.number
}
