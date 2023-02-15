import React from 'react'

const PetForm = () => {
  return (
    <div><h2>Dados do Pet</h2>

<div className="form-control"> 
    <label htmlFor="petName">Nome do Pet:</label>
    <input
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
        type="radio" 
        id="canine" 
        name="species" 
        value="Canino" 
        required />
      <label htmlFor="canine">Canino</label>
    </div>
    <div>
      <input 
        type="radio" 
        id="feline" 
        name="species" 
        value="Felino" 
        required />
      <label htmlFor="feline">Felino</label>
    </div>
</div>

<div className="form-control"> 
    <label htmlFor="gender">Gênero (Fêmea/Macho):</label>
    <div>
      <input 
        type="radio" 
        id="female" 
        name="gender" 
        value="Fêmea" 
        required />
      <label htmlFor="female">Fêmea</label>
    </div>
    <div>
      <input 
        type="radio" 
        id="male" 
        name="gender" 
        value="Macho" 
        required />
      <label htmlFor="male">Macho</label>
    </div>
</div>
<div className="form-control"> 
    <label htmlFor="breed">Raça:</label>
    <input
      type="text" 
      name="breed" 
      id="breed" 
      placeholder='Digite a raça do seu pet' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="temperament">Temperamento:</label>
    <input
      type="text" 
      name="temperament" 
      id="temperament" 
      placeholder='Descreva o temperamento do seu pet' 
      required   />
  </div>
  <div className="form-control"> 
    <label htmlFor="coatColor">Cor da Pelagem:</label>
    <input
      type="text" 
      name="coatColor" 
      id="coatColor" 
      placeholder='Digite a cor da pelagem do seu pet' 
      required   />
  </div>
  <div className="form-control"> 
  <label htmlFor="petWeight">Porte do Pet (em Kilos):</label>
  <div>
    <input type="radio" id="weightRange1" name="petWeight" value="0-10" />
    <label htmlFor="weightRange1">De 0 até 10 kilos</label>
  </div>
  <div>
    <input type="radio" id="weightRange2" name="petWeight" value="11-20" />
    <label htmlFor="weightRange2">De 11 a 20 Kilos</label>
  </div>
  <div>
    <input type="radio" id="weightRange3" name="petWeight" value="21-30" />
    <label htmlFor="weightRange3">De 21 a 30 Kilos</label>
  </div>
  <div>
    <input type="radio" id="weightRange4" name="petWeight" value="31-40" />
    <label htmlFor="weightRange4">De 31 a 40 kilos</label>
  </div>
  <div>
    <input type="radio" id="weightRange5" name="petWeight" value="41+" />
    <label htmlFor="weightRange5">Mais de 41 kilos</label>
  </div>
</div>

  <div className="form-control"> 
    <label htmlFor="birthday">Data de nascimento do Pet:</label>
    <input
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
        type="radio" 
        id="yes" 
        name="castrated" 
        value="Sim" 
        required />
      <label htmlFor="yes">Sim</label>
    </div>
    <div>
      <input 
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