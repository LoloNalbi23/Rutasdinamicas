import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Inicio.css'

function Inicio() {
  const [cant, setCant] = useState(0)
  const [dale,setDale] = useState(true)

  const navigate = useNavigate();

  const mezclar = () => {
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${cant}`)
      .then(response => response.json())
      .then(data => {
        const deck = data.deck_id
        navigate("/juga", { state: { deck: deck } })
      });
  }

  const hcc = (e) => {
    setCant(e.target.value)
    console.log(e.target.value)
    setDale(false)
  }

  return (
    <>
      <div className="inicio-container">
        <label htmlFor="cantidad">Colocar la cantidad de mazos</label>
        <input type="number" id="cantidad" onChange={hcc} />
        <button disabled={dale} onClick={mezclar}>Mezclar</button>
      </div>
    </>
  )
}

export default Inicio
