import useForm from "@/hooks/useForm";
import '../styles/App.css';
import '../styles/index.css';

import Head from 'next/head'

import { GrFormNext, GrFormPrevious, GrFormSubtract } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import Steps from "@/components/Steps/Steps";

export default function Home() {

  const { currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    isFirstStep
  } = useForm();



  return (
    
    
    <div className="app">
  
      <div className='header'>

        Cadastro de Clientes Vila Pet Brasil
      </div>
      <p>Respeitamos a Lei Geral de Proteção de Dados Pessoais.
        Os dados informados são usados somente para cumprimento de obrigações fiscais e cadastro</p>

      <div className='form-container'>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className='inputs-container'>{currentComponent}</div>
          <div className="actions">
            {isFirstStep ? (<span></span>) : (<button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>)}
            {!isLastStep ? (<button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>) : (<button type='button'>
              <span>Enviar</span>
              <FiSend />
            </button>)}
          </div>
        </form>
      </div>
    </div>
  )
}