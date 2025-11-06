import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Juga.css'

export default function Juga() {
    const [cup,setCup] = useState([{ img: "https://deckofcardsapi.com/static/img/back.png" },
    { img: "https://deckofcardsapi.com/static/img/back.png" }])
    const [play,setPlay] = useState([{ img: "https://deckofcardsapi.com/static/img/back.png" },
    { img: "https://deckofcardsapi.com/static/img/back.png" }])
    const [sumac,setSumac] = useState(0)
    const [sumap,setSumap] = useState(0)
    const [puedoPedir,setPuedoPedir] = useState(true)
    const [reparti,setReparti] = useState(false)
    const [quedo,setQuedo] = useState(true)
    const [terminado,setTerminado] = useState(true)

    const location = useLocation();
    const { deck } = location.state || {};
    const Suma = (cartas) => {
        let total = 0;
        let ases = 0;
        cartas.forEach(carta => {
            const valor = carta.value;
            if ('KING' == valor || 'QUEEN' == valor || 'JACK' == valor) {
                total += 10;
            } else if (valor === "ACE") {
                total += 11;
                ases += 1;
            } else {
                total += parseInt(valor);
            }
        });
        while (total > 21 && ases > 0) {
            total -= 10;
            ases -= 1;
        }
        if(JSON.stringify(cartas) === JSON.stringify(play)){
            if(total==21 && play.length==2){
                Swal.fire({
                    icon: "success",
                    title: "Blackjack",
                    text: "Deja de contar cartas"
                });
                setTerminado(false)
            }
            if(total>21){
                Swal.fire({
                    icon: "error",
                    title: "Perdiste",
                    text: "Te pasaste de 21 bro"
                });
                setQuedo(true);
                setPuedoPedir(true)
                setTerminado(false)
            }
            if(total==21){
                setPuedoPedir(true)
            }
        }
        if(JSON.stringify(cartas) === JSON.stringify(cup) && puedoPedir==true && quedo==true){
            if(total<=17 && sumac<total){
                fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
                .then(response => response.json())
                .then(data => {
                    (data.cards).map((c) => {
                    const newcard = {value : c.value, img: c.image}
                    console.log(newcard)
                    setCup(cup => [...cup,newcard])
            })
        })
            } else if(total>21) {
                Swal.fire({
                    icon: "success",
                    title: "Ganastee",
                    text: "El cupier se fue al asco"
                });
                setTerminado(false)
            } else if(total==21){
                if(sumap==total){
                    Swal.fire({
                    icon: "info",
                    title: "Empate",
                    text: "Que suerte que tiene este loco"
                });
                setTerminado(false)
                } else if(sumap<total){
                    Swal.fire({
                    icon: "error",
                    title: "Perdiste",
                    text: "Daaa, que suerte"
                });
                setQuedo(true);
                setTerminado(false)
                } 
            }else if(total<21){
                    if(sumap>total){
                    Swal.fire({
                    icon: "success",
                    title: "Ganastee",
                    text: "Cupier malo"
                    });
                    setTerminado(false)
                    } else if(sumap<total){
                        Swal.fire({
                        icon: "error",
                        title: "Perdiste",
                        text: "Por pocooo, vamos con otra"
                    });
                    setQuedo(true);
                    setTerminado(false)
                    } else if(sumap==total){
                    Swal.fire({
                    icon: "info",
                    title: "Empate",
                    text: "Que suerte que tiene este loco"
                    });
                    setTerminado(false)
                    }
            }
        }

        return total;
    };

    useEffect(() => setSumap(Suma(play)),[play])
    useEffect(() => setSumac(Suma(cup)),[cup])

    const repartir = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=3`)
        .then(response => response.json())
        .then(data => {
            setCup([{ value: 0 ,img: "https://deckofcardsapi.com/static/img/back.png" }]);
            setPlay([]);
            setReparti(true);
            setTerminado(true);
            setPuedoPedir(false);
            setQuedo(false);
            (data.cards).map((c,index) => {
                const newcard = {value : c.value, img: c.image}
                console.log(newcard)
                if (index % 2 === 0) {
                    setPlay(play => [...play,newcard])
                    console.log([...play,newcard])
                }else {
                    setCup(cup => [...cup,newcard])
                    console.log([...cup,newcard])
                }
            })
        })
    }

    const pedir = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
        .then(response => response.json())
        .then(data => {
            (data.cards).map((c) => {
                const newcard = {value : c.value, img: c.image}
                console.log(newcard)
                setPlay(play => [...play,newcard])
            })
        })
    }

    const quedarse = () => {
        setPuedoPedir(true)
        setQuedo(true)
        fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
        .then(response => response.json())
        .then(data => {
            (data.cards).map((c) => {
                const newcard = {value : c.value, img: c.image}
                console.log(newcard)
                setCup(([_, ...rest]) => rest)
                setCup(cup => [...cup,newcard])
            })
        })
    }
    return (
        <div className="juego-container">
        <div className="mesa">
        {/* Dealer */}
        <div className="dealer-section">
            <h2>Dealer</h2>
            <div className="cartas">
            {cup.map((card, i) => (
                <img key={i} src={card.img} alt={`Dealer card ${i}`} width={100} height={140} />
            ))}
            </div>
            <h3>{sumac}</h3>
        </div>

        {/* Jugador */}
        <div className="jugador-section">
            <h2>Jugador</h2>
            <div className="cartas">
            {play.map((card, i) => (
                <img key={i} src={card.img} alt={`Player card ${i}`} width={100} height={140} />
            ))}
            </div>
            <h3>{sumap}</h3>
        </div>
        </div>

        {/* Botones */}
        <div className="botones">
        <button disabled={reparti} onClick={repartir}>Repartir</button>
        <button disabled={puedoPedir} onClick={pedir}>Pedir</button>
        <button disabled={quedo} onClick={quedarse}>Quedarse</button>
        <button disabled={terminado} onClick={repartir}>Ronda nueva</button>
        </div>
    </div>
    );
}
