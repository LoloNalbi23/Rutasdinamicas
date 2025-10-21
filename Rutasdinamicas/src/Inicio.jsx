import { useState } from 'react'
import './all.css'
import { Outlet, Link } from 'react-router-dom'

function Inicio() {
  const peliculas = [{
id: 1,
titulo: "Matrix",
director: "Lana y Lilly Wachowski",
año: 1999,
descripcion: "Un hacker descubre la verdad detrás de la realidad simulada en la que vive y lidera la rebelión contra las máquinas.",
url: "https://i.blogs.es/8b8798/06-06-matrix/840_560.jpg",
fav: false
},{
id: 2,
titulo: "El Señor de los Anillos: La Comunidad del Anillo",
director: "Peter Jackson",
año: 2001,
descripcion: "Un hobbit hereda un anillo poderoso y emprende una peligrosa misión para destruirlo antes de que caiga en manos del enemigo.",
url: "https://pics.filmaffinity.com/El_seanor_de_los_anillos_La_comunidad_del_anillo-952398002-large.jpg",
fav: false
},{
id: 3,
titulo: "Inception",
director: "Christopher Nolan",
año: 2010,
descripcion: "Un ladrón especializado en infiltrarse en los sueños debe cumplir una misión imposible: implantar una idea en la mente de alguien.",
url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
fav: false
},
{
id: 4,
titulo: "Pulp Fiction",
director: "Quentin Tarantino",
año: 1994,
descripcion: "Historias entrelazadas de criminales, boxeadores y gánsteres en Los Ángeles, narradas con un estilo único y no lineal.",
url: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
fav: false
},
{
id: 5,
titulo: "Interstellar",
director: "Christopher Nolan",
año: 2014,
descripcion: "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjLkpo59dXaLN6IRLqioLl7H57e0R7ET-fg&s",
fav: false
}]

  return (
    <>
      <nav>
        <div className="home">
      <img className="decoracion top-left" src="URL_DE_LA_IMAGEN_1" alt="" />
      <img className="decoracion bottom-right" src="URL_DE_LA_IMAGEN_2" alt="" />

      <h1>Conozca detalles de sus peliculas favoritas</h1>
        <ul>
            <Link to="/peliculas/all">Ver todas las peliculas</Link>
        </ul>
    </div>
      </nav>
      <Outlet context={peliculas}/>
    </>
  )
}

export default Inicio