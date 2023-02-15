import {AiOutlineUser} from 'react-icons/ai';
import  {FiSend} from 'react-icons/fi';
import {GiNotebook, GiPawHeart} from 'react-icons/gi';




import "./Steps.css";

const Steps = ({currentStep}) => {

  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser  />
        <p>Identificação do Tutor</p>
      </div>
      <div className={`step ${currentStep>=1?"active":""}`} >
      <GiPawHeart/>
        <p>Identificação do Pet</p>
      </div>
      <div className={`step ${currentStep>=2?"active":""}`} >
        <GiNotebook/>
        <p>Relato do Caso ou Interesse</p>
      </div>
      <div className={`step ${currentStep>=3?"active":""}`} >
        <FiSend/>
        <p>Envio do Cadastro</p>
      </div>
    </div>
  )
}

export default Steps