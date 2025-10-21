import { useEffect, useState } from 'react'
import './Requests.css'

function Requests() {
  const [url, setUrl] = useState("")
  const [nombre, setNombre] = useState("")
  const [info, setInfo] = useState({})


  const gen_imagen = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => setUrl(data.message));
  } 

  const look_for = (e) => {
    e.preventDefault()
    fetch(`https://restcountries.com/v3.1/name/${nombre}`)
    .then(res => res.json())
    .then(data => {setInfo(data[0]); console.log(data[0])})
    //.catch((error) => console.log("Ocurrió un error"))
  } 

  const actualizar = (e) => {
    
    console.log(e.target.value)
    setNombre(e.target.value)
  }
  
  useEffect(() => gen_imagen(),[])
  
  return (
    <>
      <h1>Generador de imagenes de perros</h1>
      <button onClick={gen_imagen}>Generar</button>
      <p></p>
      <img src={url} alt="Cargando..." />

      <h1>Busca información de un país</h1>
      <form onSubmit={look_for}>
        <label htmlFor="name">Nombre del país</label>
        <input id="name"type="text" onChange={actualizar}/>
        <button type='submit'>Buscar</button>
      </form>
      
    
    <h2 className='text'>{info.name?.common}</h2>
    <h1 className='text'>{info.capital}</h1>
    <p className='text'>{info.continents}</p>
    <p className='text'>{info.population}</p>
    <img src={info.flags?.png} alt="" />
    <img src={info.coatOfArms?.png} alt="" />
    <a href={info.maps?.googleMaps}></a>
    </>
  )
}

export default Requests
