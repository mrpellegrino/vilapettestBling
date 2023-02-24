

import React from 'react'
import consultaCEp from '../pages/api/consultaCep'

const UserForm = ({handleChangeField,formState}) => {
  
  return (
    <div>
      <h2>Dados do tutor</h2>
      <div className="form-control"> 
    <label htmlFor="name">Nome Completo:</label>
    <input
    onChange={(e)=>{
      handleChangeField('name',e.target.value)
    }}
    value={formState?.name||''}
      type="text" 
      name="name" 
      id="name" 
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
      value={formState?.cpf||''}
      type="number" 
      name="cpf" 
      id="cpf" 
      placeholder='Digite seu CPF' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="telephone">Telefone:</label>
    <input
      onChange={(e)=>{
        handleChangeField('telephone',e.target.value)
      }}
      value={formState?.telephone||''}
      type="tel" 
      name="telephone" 
      id="telephone" 
      placeholder='Digite seu telefone' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="zipCode">CEP:</label>
    <input
      onChange={(e)=>{
        handleChangeField('zipCode',e.target.value)
      }} 
      onBlur={async() => {const address = await consultaCEp(formState.zipCode)
        console.log(address)
        formState.address=address.logradouro;
        formState.neighborhood=address.bairro
        formState.city=address.localidade+' / '+ address.uf
        
        }}

      value={formState?.zipCode||''}
      type="text" 
      name="zipCode" 
      id="zipCode" 
      placeholder='Digite seu CEP' 
      required   />
  </div>
  <div className="form-control"> 
        <label htmlFor="addressNumber">Número:</label>
        <input
          onChange={(e) => {
            handleChangeField('addressNumber', e.target.value);
          }}
          value={formState?.addressNumber || ''}
          type="text" 
          name="addressNumber" 
          id="addressNumber" 
          placeholder='Digite o número da sua casa' 
          required
        />
      </div>
  <div className="form-control"> 
    <label htmlFor="address">Endereço :</label>
    <input
      onChange={(e)=>{
        handleChangeField('address',e.target.value)
      }}
      value={formState?.address||''}
      type="text" 
      name="address" 
      id="address" 
      placeholder='Digite o nome da sua rua' 
      required   />
  </div>
  <div className="form-control">
        <label htmlFor="neighborhood">Bairro:</label>
        <input
          onChange={(e) => {
            handleChangeField('neighborhood', e.target.value)
          }}
          value={formState?.neighborhood || ''}
          type="text"
          name="neighborhood"
          id="neighborhood"
          placeholder='Digite o nome do Seu Bairro'
          required  />
  </div>

      <div className="form-control"> 
        <label htmlFor="city">Cidade e Estado:</label>
        <input
          onChange={(e) => {
            handleChangeField('city', e.target.value);
          }}
          value={formState?.city || ''}
          type="text" 
          name="city" 
          id="city" 
          placeholder='Digite a sua Cidade e Estado' 
          required
        />
      </div>

  <div className="form-control"> 
    <label htmlFor="addressComplement">Complemento:</label>
    <input
       onChange={(e) => {
         handleChangeField('addressComplement', e.target.value)
       }}
       value={formState?.addressComplement || ''}
       type="text"
       name="addressComplement"
       id="addressComplement"
       placeholder='Complemento(Opcional)'
       />
  </div>
    </div>
  )
}

export default UserForm