import { useParams,useOutletContext } from "react-router-dom"


function Detalles () {
    const {id} = useParams()
    const [pelis,setPelis] = useOutletContext()

    const agregar_a_fav = (id) => {
        setPelis((pelis.filter(p => p.id == id)).map(v => v.fav = true))
    }

    return (
        <>
            {(pelis.filter(p => p.id==id)).map(v => {
                return (
                    <div className="detalle-pelicula">
                        <img src={v.url} alt={v.titulo}/>
                        <div className="info">
                            <h2>{v.titulo}</h2>
                            <div className="director">Director: {v.director}</div>
                            <div className="año">Año: {v.año}</div>
                            <p>{v.descripcion}</p>
                            <button onClick={agregar_a_fav(v.id)}>Favoritos</button>
                        </div>
                    </div>
                )
            }
                
            )}
        </>
    )
}

export default Detalles