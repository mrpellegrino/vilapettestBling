import IconsultaCep from '../../interfaces/IconsultaCep'

async function consultaCEp(cep:string)
{


    const response =  await fetch('https://viacep.com.br/ws/'+cep+'/json/');
    const address = await response.json();
    //console.log(address)//teste
    return address;

}

export default consultaCEp;