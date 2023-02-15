
import './App.css'

//components
import {GrFormNext,GrFormPrevious, GrFormSubtract} from 'react-icons/gr';
import {FiSend} from 'react-icons/fi';
import Steps from '../components/Steps/Steps';


//hooks
import useForm from '../hooks/useForm';

function App() {

  const {currentStep,
    currentComponent, 
    changeStep,
    isLastStep,
    isFirstStep,
    formState
    }  = useForm();
    
  return (
    <div className="app">
    <div className='header'>
      
      Cadastro de Clientes Vila Pet Brasil
    </div>
    <p>Esse cadastro respeita A Lei Geral de ProteÃ§Ã£o de Dados Pessoais. 
      Os dados informados sÃ£o usados somente para cumprimento de obrigaÃ§Ãµes fiscais e cadastro</p>
   
   <div className='form-container'>
    <Steps currentStep={currentStep}/>
    <form  onSubmit={(e) => changeStep(currentStep+1,e)}>
      <div className='inputs-container'>{currentComponent}</div>
      <div className="actions">
       {isFirstStep?( <span></span>):( <button type='button' onClick={() => changeStep(currentStep-1)}>
          <GrFormPrevious/>  
          <span>Voltar</span>
          </button>)}
      {!isLastStep? (  <button type='submit'>
        <span>AvanÃ§ar</span>
        <GrFormNext/>
        </button>):(  <button type='button'>
        <span>Enviar</span>
        <FiSend/>
        </button>)}
      </div>
    </form>
   </div>  
    </div>    
  )
}

export default App
