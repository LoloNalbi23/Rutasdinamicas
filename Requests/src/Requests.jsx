import { useState,useEffect } from 'react'
import './Requests.css'
import { useParams } from 'react-router-dom'

function Requests() {
  const {nombre} = useParams()
  const [info, setInfo] = useState({})

  const look_for = () => {
    fetch(`https://restcountries.com/v3.1/name/${nombre}`)
    .then(res => res.json())
    .then(data => {setInfo(data[0]); console.log(data[0])})
    //.catch((error) => console.log("Ocurrió un error"))
  } 

  useEffect(() => {look_for},[])
  
  return (
    <>
    
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
