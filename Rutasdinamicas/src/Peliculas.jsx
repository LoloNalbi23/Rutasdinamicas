import { Link, useOutletContext } from "react-router-dom"

function Peliculas () {
    let pelis = useOutletContext()
    return (
        <>
            <Link to="/peliculas/:id"></Link>
        </>
    )
}

export default Peliculas