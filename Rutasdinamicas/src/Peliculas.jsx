import { Link, useOutletContext } from "react-router-dom"

function Peliculas () {
    let pelis = useOutletContext()
    return (
        <>
            {pelis.filter(p => <Link to="/peliculas/:id"></Link>)}
        </>
    )
}

export default Peliculas