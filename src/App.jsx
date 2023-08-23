//Components
import './App.css';
import ReviewForm from './components/ReviewForm';
import ThanksForm from './components/ThanksForm';
import UserForm from './components/UserForm';
import Steps from './components/Steps'

//hooks
import { useForm } from "./hooks/useForm";

function App() {

  const formComponents = [

    <UserForm key="userForm" />,
    <ReviewForm key="reviewForm" />,
    <ThanksForm key="thanksForm" />

  ];
  const { currentStep, currentComponent, stepChange, firstStep, lastStep } = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua Avaliação</h2>
        <p>Agradecemos pela sua compra! Utilize o formulário abaixo para compartilhar a sua avaliação do produto.</p>
      </div>
      <div className="form-conteiner">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => stepChange(currentStep + 1, e)}>
          <div className="input-conteiner">{currentComponent}</div>
          <div className="actions">
            {!firstStep && (<button id='back' type='button' onClick={() => stepChange(currentStep - 1)}>Voltar</button>)}
            {!lastStep ? (<button className='advance' type='submit'>Avançar</button>) : (<button className='advance' type='button'>Enviar</button>)}
          </div>
        </form>
      </div>
    </div>
  )
}


export default App
