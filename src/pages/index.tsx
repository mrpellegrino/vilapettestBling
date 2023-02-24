import useForm from "@/hooks/useForm";
import '../styles/App.css';
import '../styles/index.css';
import cadastrar from '../pages/api/cadastrar';
import Image from 'next/image'
import logo from '../../public/vila-pet-logo-05.png';



import { GrFormNext, GrFormPrevious, GrFormSubtract } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import Steps from "@/components/Steps/Steps";
import consultaCEp from './api/consultaCep';

export default function Home() {

  const { currentStep,
    currentComponent,
    changeStep,
    isLastButOneStep,
    isLastStep,
    isFirstStep,
    formState
  } = useForm();

  return (

    <div className="app">  
      <div className='header'>
        <div className="logo">
        <Image src={logo} 
        alt="Picture of the author"      
        /> 
        </div>
        <h2>Cadastro de Clientes Vila Pet Brasil</h2>
      </div>
      <p className="legenda">Respeitamos a Lei Geral de Proteção de Dados Pessoais.
        Os dados informados são usados somente para cumprimento de obrigações fiscais e cadastro</p>

      <div className='form-container'>
       
        <Steps currentStep={currentStep}></Steps>
      
     
      
        <form onSubmit={(e)=>{
          e.preventDefault();
         { 
          const feito = isLastButOneStep?cadastrar(formState):'';
          changeStep(currentStep + 1)}
        }


          }>

          <div className='inputs-container'>{currentComponent}</div>
          
          
          
          {!isLastStep?(

            
          <div className="actions">
            {isFirstStep ? (<span></span>) : (<button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>)}
            {!(isLastButOneStep) ? (<button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>) : (<button type='submit'>
              <span>Enviar</span>
              <FiSend />
            </button>)}
          </div>):""} 

               
        </form>
      </div>
    </div>
  )
}