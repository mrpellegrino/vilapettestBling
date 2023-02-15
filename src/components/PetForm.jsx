import React from 'react'

const PetForm = ({handleChangeField,formState}) => {
  return (
    <div><h2>Dados do Pet</h2>

<div className="form-control"> 
    <label htmlFor="petName">Nome do Pet:</label>
    <input
     onChange={(e)=>{
      handleChangeField('petName',e.target.value)
    }}
    value={formState?.petName||''}
      type="text" 
      name="petName" 
      id="petName" 
      placeholder='Digite o nome do seu pet' 
      required   />
  </div>


    <div className="form-control"> 
    <label htmlFor="species">Espécie:</label>
    <div>
      <input 
        onChange={(e) => handleChangeField('species', e.target.value)}
        checked={formState.species==="Canino"}
        value="Canino" 
        type="radio" 
        id="canine" 
        name="species" 
    
        required />
      <label htmlFor="canine">Canino</label>
    </div>
    <div>
      <input 
        onChange={(e) => handleChangeField('species', e.target.value)}
        checked={formState.species==="Felino"}
        value="Felino"
        type="radio" 
        id="feline" 
        name="species" 
      
        required />
      <label htmlFor="feline">Felino</label>
    </div>
</div>

<div className="form-control"> 
    <label htmlFor="gender">Gênero (Fêmea/Macho):</label>
    <div>
      <input 
         onChange={(e) => handleChangeField('gender', e.target.value)}
         checked={formState.gender==="female"}
        type="radio" 
        id="female" 
        name="gender" 
        value="female" 
        required />
      <label htmlFor="female">Fêmea</label>
    </div>
    <div>
      <input 
       onChange={(e) => handleChangeField('gender', e.target.value)}
       checked={formState.gender==="male"}
        type="radio" 
        id="male" 
        name="gender" 
        value="male" 
        required />
      <label htmlFor="male">Macho</label>
    </div>
</div>
<div className="form-control"> 
    <label htmlFor="breed">Raça:</label>
    <input
       onChange={(e)=>{
        handleChangeField('breed',e.target.value)
      }}
      value={formState?.breed||''}
      type="text" 
      name="breed" 
      id="breed" 
      placeholder='Digite a raça do seu pet' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="temperament">Temperamento:</label>
    <input
      onChange={(e)=>{
        handleChangeField('temperament',e.target.value)
      }}
      value={formState?.temperament||''}
      type="text" 
      name="temperament" 
      id="temperament" 
      placeholder='Descreva o temperamento do seu pet' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="coatColor">Cor da Pelagem:</label>
    <input
     onChange={(e)=>{
      handleChangeField('coatColor',e.target.value)
    }}
    value={formState?.coatColor||''}
      type="text" 
      name="coatColor" 
      id="coatColor" 
      placeholder='Digite a cor da pelagem do seu pet' 
      required   />
  </div>
  <div className="form-control"> 
  <label htmlFor="petWeight">Porte do Pet (em Kilos):</label>
  <div>
    
    <input type="radio" id="weightRange1" name="petWeight" value="0-10" 
    onChange={(e) => handleChangeField('petWeight', e.target.value)}
    checked={formState.petWeight==="0-10"}/>
    
    <label htmlFor="weightRange1">De 0 até 10 kilos</label>
    
  </div>
  <div>
    <input type="radio" id="weightRange2" name="petWeight" value="11-20" 
     onChange={(e) => handleChangeField('petWeight', e.target.value)}
     checked={formState.petWeight==="11-20"}/>
    <label htmlFor="weightRange2">De 11 a 20 Kilos</label>
   
  </div>
  <div>
    <input type="radio" id="weightRange3" name="petWeight" value="21-30"
     onChange={(e) => handleChangeField('petWeight', e.target.value)}
     checked={formState.petWeight==="21-30"} />
    <label htmlFor="weightRange3">De 21 a 30 Kilos</label>
   
  </div>
  <div>
    <input type="radio" id="weightRange4" name="petWeight" value="31-40"
     onChange={(e) => handleChangeField('petWeight', e.target.value)}
     checked={formState.petWeight==="31-40"} />
    <label htmlFor="weightRange4">De 31 a 40 kilos</label>
   
  </div>
  <div>
    <input type="radio" id="weightRange5" name="petWeight" value="41+" 
     onChange={(e) => handleChangeField('petWeight', e.target.value)}
     checked={formState.petWeight==="41+"}/>
    <label htmlFor="weightRange5">Mais de 41 kilos</label>
   
  </div>
</div>

  <div className="form-control"> 
    <label htmlFor="birthday">Data de nascimento do Pet:</label>
    <input
        onChange={(e)=>{
          handleChangeField('birthday',e.target.value)
        }}
        value={formState?.birthday||''}
      type="date" 
      name="birthday" 
      id="birthday" 
      placeholder='Digite a data de nascimento do seu pet' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="castrated">Castrado? (Sim/Não):</label>
    <div>
      <input 
       onChange={(e) => handleChangeField('castrated', e.target.value)}
       checked={formState.castrated==="Sim"}
        type="radio" 
        id="yes" 
        name="castrated" 
        value="Sim" 
        required />
      <label htmlFor="yes">Sim</label>
    </div>
    <div>
      <input 
        onChange={(e) => handleChangeField('castrated', e.target.value)}
        checked={formState.castrated==="no"}
        type="radio" 
        id="no" 
        name="castrated" 
        value="Não" 
        required />
      <label htmlFor="no">Não</label>
    </div>
</div>

  </div>

    

  )
}

export default PetForm