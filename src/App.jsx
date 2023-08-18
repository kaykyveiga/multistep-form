import './App.css'
import ReviewForm from './components/ReviewForm'
import ThanksForm from './components/ThanksForm'
import UserForm from './components/UserForm'
import {useForm} from "./hooks/useForm"


function App() {

  const formComponents = [
    
    <UserForm/>,
    <ReviewForm/>,
    <ThanksForm/>
    
  ]
  const{currentStep, currentComponent} = useForm(formComponents)

  return (
   <div className="App">
    <h2>Deixe sua Avaliação</h2>
    <p>Agradecemos pela sua compra! Utilize o formulário abaixo para compartilhar a sua avaliação do produto.</p>
    <p>Etapas</p>
    <form>
      <div className="input-conteiner">{currentComponent}</div>
      <div className="actions">
        <button>
          <span>Voltar</span>
        </button>
        <button>Avançar</button>
       
      </div>
    </form>
   </div>
  )
}

export default App
