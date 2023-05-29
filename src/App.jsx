import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* function App() {

  const [numero, setNumero] = useState(0);

  function cambiarNumero() {
    if (numero <= 19) {
      setNumero(numero + 1);
      console.log(numero);
    }
  }

  function cambiarNumero2() {
    if (numero >= 1) {
      setNumero(numero - 1);
      console.log(numero);
    }
  }

  return (
    <div>
      <h1>Numero: {numero}</h1>
      <button onClick={cambiarNumero}>+ Incrementar +</button>
      <button onClick={cambiarNumero2}>- Decrementar -</button>
    </div>
  )
} */

function App() {

  let pc;
  let movpc;
  let hum;
  let movhum;
  let resultado;

  function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }

  pc = Math.floor(aleatorio(1, 4));

  /* condiciones movimiento de pc */
  if (pc == 1) {
    movpc = "Piedra";
  }

  if (pc == 2) {
    movpc = "Papel";
  }

  if (pc == 3) {
    movpc = "Tijeras";
  }

  /* condiciones movimiento de humano */
  hum = parseInt(prompt("Selecciona una opción \n 1.Piedra \n 2.Papel \n 3.tijeras"))

  if (hum == 1) {
    movhum = "Piedra";
  }

  if (hum == 2) {
    movhum = "Papel";
  }

  if (hum == 3) {
    movhum = "Tijeras";
  }

  /* condiciones resultados */
  if (movpc == "Piedra" && movhum == "Piedra") {
    resultado = "un empate"
  }

  if (movpc == "Piedra" && movhum == "Papel") {
    resultado = "que le ganaste a PC"
  }

  if (movpc == "Piedra" && movhum == "Tijeras") {
    resultado = "que te ganó el PC"
  }

  if (movpc == "Papel" && movhum == "Papel") {
    resultado = "un empate"
  }

  if (movpc == "Papel" && movhum == "Piedra") {
    resultado = "que te ganó el PC"
  }

  if (movpc == "Papel" && movhum == "Tijeras") {
    resultado = "que le ganaste a PC"
  }

  if (movpc == "Tijeras" && movhum == "Tijeras") {
    resultado = "un empate"
  }

  if (movpc == "Tijeras" && movhum == "Papel") {
    resultado = "que te ganó el PC"
  }

  if (movpc == "Tijeras" && movhum == "Piedra") {
    resultado = "que le ganaste a PC"
  }

  return (
    <div>

      <h1>El pc saca {movpc} y tu elegiste {movhum} el resultado de esto es {resultado}</h1>

    </div>
  )

}



export default App
