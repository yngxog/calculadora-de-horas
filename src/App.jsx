import { useState } from 'react'
import './App.css'

function App() {
  const [hi, setHi] = useState(0)
  const [hf, setHf] = useState(0)
  const [mi, setMi] = useState(0)
  const [mf, setMf] = useState(0)
  const [resultado, setResultado] = useState("Resultado")

  const soma = () => {
    somaHora = Number(hi) + Number(hf);
    somaMinuto = Number(mi) + Number(mf);

    while(somaMinuto>=60){
        somaMinuto-=60;
        somaHora++;
    }

    setResultado("${somaHora}:${somaMinuto}")
  }

  return (
    <>
      <h1>Calculadora</h1>
      <div class="content">
        <h3>Escolha os horarios que deseja calcular</h3>
        <input type="number" value={hi} onChange={(e) => setHi(e.target.value)} min="0"           placeholder="Hora Inicial" />
        <input type="number" value={hf} onChange={(e) => setHf(e.target.value)} min="0" max="59"  placeholder="Minuto Inicial" /><br />
        <input type="number" value={mi} onChange={(e) => setMi(e.target.value)} min="0"           placeholder="Hora Final" />
        <input type="number" value={mf} onChange={(e) => setMf(e.target.value)} min="0" max="59"  placeholder="Minuto Final" /><br />
        <h3>Escolha a operação</h3>
        <button onclick="soma()">Soma</button>
        <button onclick="sub()">Diferença</button>
        <h3 id='r'>{resultado}</h3>
      </div>
    </>
  )
}

export default App
