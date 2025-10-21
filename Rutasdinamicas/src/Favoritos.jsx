import { Link, useOutletContext } from "react-router-dom"

function Favoritos () {
    let pelis = useOutletContext()

    return (
        <>
        <div id="pelis">
            {(pelis.filter(v => v.fav == true)).map((p) => (
                <div>
                    <Link to={`/peliculas/${p.id}`}>{p.titulo}</Link> 
                </div>
        ))}
        </div>
        
        </>
    )
}

export default Favoritos