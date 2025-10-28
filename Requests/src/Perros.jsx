    import { useEffect, useState } from 'react'
    import './Requests.css'

    function Perros() {
    const [url, setUrl] = useState("")


    const gen_imagen = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setUrl(data.message));
    } 

    
    useEffect(() => gen_imagen(),[])
    
    return (
        <>
        <h1>Generador de imagenes de perros</h1>
        <button onClick={gen_imagen}>Generar</button>
        <p></p>
        <img src={url} alt="Cargando..." />
        </>
    )
    }

    export default Perros
