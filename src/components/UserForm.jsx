

import React from 'react'


const UserForm = ({handleChangeField,formState}) => {
  return (
    <div>
      <h2>Dados do tutor</h2>
      <div className="form-control"> 
    <label htmlFor="fullName">Nome Completo:</label>
    <input
    onChange={(e)=>{
      handleChangeField('fullname',e.target.value)
    }}
    value={formState?.fullname||''}
      type="text" 
      name="fullName" 
      id="fullName" 
      placeholder='Digite seu nome completo' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="cpf">CPF:</label>
    <input
      min={0}
      onChange={(e)=>{
        handleChangeField('cpf',e.target.value)
      }}
      type="number" 
      name="cpf" 
      id="cpf" 
      placeholder='Digite seu CPF' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="telephone">Telefone:</label>
    <input
      type="tel" 
      name="telephone" 
      id="telephone" 
      placeholder='Digite seu telefone' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="address">Endereço Completo:</label>
    <input
      type="text" 
      name="address" 
      id="address" 
      placeholder='Digite seu endereço completo' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="zipCode">CEP:</label>
    <input
      type="text" 
      name="zipCode" 
      id="zipCode" 
      placeholder='Digite seu CEP' 
      required   />
  </div>
    </div>
  )
}

export default UserForm