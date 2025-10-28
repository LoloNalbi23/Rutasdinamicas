    import { useState } from 'react'
    import './Requests.css'
    import { useNavigate,Link,Outlet } from 'react-router-dom'

    function Inicio() {
    const [nombre, setNombre] = useState("")
    const navigate = useNavigate();


    const actualizar = (e) => {
        e.preventDefault()
        setNombre(e.target.value)
    }
    const navegar = () => {
        navigate(`/paises/${nombre}`)
    }
    
    return (
        <>
        <h1>Busca información de un país</h1>
        <form onSubmit={navegar}>
            <label htmlFor="name">Nombre del país</label>
            <input id="name"type="text" onChange={actualizar}/>
            <button type='submit'>Buscar</button>
        </form>
        <Link to={`/perros`}>Y esto?</Link>
        <Outlet context={nombre}></Outlet>
        </>
    )
    }

    export default Inicio
