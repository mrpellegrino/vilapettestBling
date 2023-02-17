import useForm from "@/hooks/useForm";
import '../styles/App.css';
import '../styles/index.css';
import cadastrar from '../pages/api/CreatePipedriveNewdeal';



import { GrFormNext, GrFormPrevious, GrFormSubtract } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import Steps from "@/components/Steps/Steps";

export default function Home() {

  const { currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    isFirstStep,
    formState
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
        <form onSubmit={(e)=>cadastrar(formState)}>
          <div className='inputs-container'>{currentComponent}</div>
          <div className="actions">
            {isFirstStep ? (<span></span>) : (<button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>)}
            {!isLastStep ? (<button type='button' onClick={(e) => changeStep(currentStep + 1, e)}>
              <span>Avançar</span>
              <GrFormNext />
            </button>) : (<button type='submit' 
           >
              <span>Enviar</span>
              <FiSend />
            </button>)}
            
          </div>
          <button type='button' onClick={(e)=>cadastrar(formState)}>
          <span>Teste</span>
            </button>
      
        </form>
      </div>
    </div>
  )
}