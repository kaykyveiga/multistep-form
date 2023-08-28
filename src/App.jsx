//Components
import './App.css';
import ReviewForm from './components/ReviewForm';
import ThanksForm from './components/ThanksForm';
import UserForm from './components/UserForm';
import Steps from './components/Steps'

//hooks
import { useForm } from "./hooks/useForm";
import { useState } from 'react';

function App() {

  const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
  };

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value }
    });
  };

  const [data, setData] = useState(formTemplate);

  const formComponents = [

    <UserForm key="userForm" data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm key="reviewForm" data={data} updateFieldHandler={updateFieldHandler} />,
    <ThanksForm key="thanksForm" data={data} />

  ];

  const { currentStep, currentComponent, stepChange, firstStep, lastStep } = useForm(formComponents);

  const handldeSubmit = (e) => {
    stepChange(currentStep + 1, e);
  };

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua Avaliação</h2>
        <p>Agradecemos pela sua compra! Utilize o formulário abaixo para compartilhar a sua avaliação do produto.</p>
      </div>
      <div className="form-conteiner">
        <Steps currentStep={currentStep} />
        <form onSubmit={handldeSubmit}>
          <div className="input-conteiner">{currentComponent}</div>
          <div className="actions">
            {!firstStep && (<button id='back' type='button' onClick={() => stepChange(currentStep - 1)}>Voltar</button>)}
            {!lastStep ? (<button className='advance' type='submit'>Avançar</button>) : (<button className='advance' type='button' onClick={() => { alert("Avaliação Enviada!"); location.reload(); }}>Enviar</button>)}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
