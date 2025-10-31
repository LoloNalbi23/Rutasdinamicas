import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(response => response.json())
    .then(data => setProd(data));
    },[])
  return (
    <>
      
    </>
  )
}

export default App
