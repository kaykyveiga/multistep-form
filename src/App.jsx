import {GrFormPrevious, GrFormNext} from "react"
import './App.css'

function App() {

  return (
   <div className="app">
    <h2>Deixe sua Avaliação</h2>
    <p>Agradecemos pela sua compra! Utilize o formulário abaixo para compartilhar a sua avaliação do produto.</p>
    <p>Etapas</p>
    <form>
      <div className="actions">
        <button>
          <GrFormPrevious/>
          <span>Voltar</span>
        </button>
        <button>Avançar</button>
        <GrFormNext/>
      </div>
    </form>
   </div>
  )
}

export default App
