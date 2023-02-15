import React from 'react'

const CaseForm = ({handleChangeField,formState}) => {
  return (
    <div><h2>Serviço Solicitado</h2>

<div className="form-control"> 
    <label htmlFor="service">Qual serviço você deseja solicitar?</label>
    <div>
      <input 
        onChange={(e)=>{
          handleChangeField('service',e.target.value)
        }}
        type="radio" 
        id="bathAndGrooming" 
        name="service" 
        value="Banho e Tosa" 
        required 
      />
      <label htmlFor="bathAndGrooming">Banho e Tosa</label>
    </div>
    <div>
      <input 
       onChange={(e)=>{
        handleChangeField('service',e.target.value)
      }}
        type="radio" 
        id="veterinaryServices" 
        name="service" 
        value="Serviços Veterinarios" 
        required 
      />
      <label htmlFor="veterinaryServices">Serviços Veterinarios</label>
    </div>
  </div>
  {formState.service==="Serviços Veterinarios"&&(
      <div className="form-control"> 
      <label htmlFor="veterinaryDescription">Descreva o que está acontecendo com seu pet:</label>
      <textarea
        name="veterinaryDescription" 
        id="veterinaryDescription" 
        required
      />
    </div>
  ) }




    </div>
  )
}

export default CaseForm