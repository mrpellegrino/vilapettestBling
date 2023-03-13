import useForm from "@/hooks/useForm";
import '../styles/App.css';
import '../styles/index.css';
import cadastrar from '../pages/api/cadastrar';
import Image from 'next/image'
import logo from '../../public/vila-pet-logo-05.png';



import { GrFormNext, GrFormPrevious, GrFormSubtract } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import Steps from "@/components/Steps/Steps";
import { formPayload } from '@/interfaces/IformPayload';

export default function Home() {
  const pessoa:formPayload = {
    name: 'João da Silva teste',
    cpf: '923.277.760-66',
    address: 'Rua das Flores, 123',
    telephone: '(11) 98765-4321',
    zipCode: '01234-567',
    neighborhood: 'Jardim das Rosas',
    addressNumber: '123',
    addressComplement: 'Apto 456',
    petName: 'Mel',
    species: 'Cachorro',
    gender: 'Fêmea',
    breed: 'Vira-lata',
    temperament: 'Brincalhona',
    coatColor: 'Preto',
    petWeight: '10kg',
    birthday: '01/01/2015',
    castrated: 'Sim',
    service: 'Consulta',
    veterinaryDescription: 'Check-up geral',
    city: 'São Paulo',
    howMeetUs: 'Indicação de amigo',
    uf: 'SP'
  };
  

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

          <button type='button' onClick={async() =>await cadastrar(pessoa)}>
              <span>Enviar</span>
              <FiSend />
            </button>

               
        </form>
      </div>
    </div>
  )
}