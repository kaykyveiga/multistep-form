import './App.css'
import ReviewForm from './components/ReviewForm'
import ThanksForm from './components/ThanksForm'
import UserForm from './components/UserForm'
import { useForm } from "./hooks/useForm"


function App() {

  const formComponents = [

    <UserForm key="userForm" />,
    <ReviewForm key="reviewForm" />,
    <ThanksForm key="thanksForm" />

  ];
  const { currentStep, currentComponent, stepChange, firstStep, lastStep } = useForm(formComponents)

  return (
    <div className="App">
      <h2>Deixe sua Avaliação</h2>
      <p>Agradecemos pela sua compra! Utilize o formulário abaixo para compartilhar a sua avaliação do produto.</p>
      <p>Etapas</p>
      <form onSubmit={(e) => stepChange(currentStep + 1, e)}>
        <div className="input-conteiner">{currentComponent}</div>
        <div className="actions">
          {!firstStep && (<button type='button' onClick={() => stepChange(currentStep - 1)}>Voltar</button>)}
          {!lastStep ? (<button type='submit'>Avançar</button>) : (<button type='button'>Enviar</button>)}
        </div>
      </form>
    </div>
  )
}

export default App
