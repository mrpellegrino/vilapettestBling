import formPayload from "../../interfaces/IformPayload";
const CreateBlingNewContact = async (params:formPayload) => {
  

  const api_key = '28691ee9e7947997cb1c45d23ba1b9752db747cb88902d37fd0b8b7a2fdae6b35d621f8c';
  const data = params;
  const url_base = 'https://www.bling.com.br/Api/v2/contato';

  

  var raw = "";

fetch(`https://bling.com.br/Api/v2/contato/
?apiKey&xml=<contato>\n 
 <nome>${data.name}</nome>\n  
 <fantasia>${data.petName}</fantasia>\n
 	<tipoPessoa>F</tipoPessoa>\n
  <contribuinte>9</contribuinte>\n
  <cpf_cnpj>${data.cpf}</cpf_cnpj>\n
  <endereco>${data.address}</endereco>\n
  <numero>${data.addressNumber}</numero>\n
  <complemento>${data.addressComplement}</complemento>\n
  <bairro>${data.neighborhood}</bairro>\n
  <cep>${data.zipCode}</cep>\n
  <cidade>${data.city}}</cidade>\n
  <uf>${data.uf}</uf>\n
  <fone>${data.telephone}</fone>\n
  </contato>`, 
                       {
                        method: 'POST',
                        mode:'no-cors',
                        body: raw,
                        redirect: 'follow'
                      })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));





  // let xml = '';
  //   xml += '<contato>\n';
  //   xml += `<nome>${data.name}</nome>\n`;
  //   xml += `<fantasia>${data.petName}</fantasia>\n`;
  //   xml += `<tipoPessoa>F</TipoPessoa>\n`;
  //   xml += `<contribuinte>9</contribuinte>\n`;
  //   xml += `<cpf_cnpj>${data.cpf}</cpf_cnpj>\n`;
  //   xml += `<endereco>${data.address}</endereco>\n`;
  //   xml += `<numero>${data.addressNumber}</numero>\n`;
  //   xml += `<complemento>${data.addressComplement}</complemento>\n`;
  //   xml += `<bairro>${data.neighborhood}</bairro>\n`;
  //   xml += `<cep>${data.zipCode}</cep>\n`;
  //   xml += `<cidade>${data.city}</cidade>\n`;
  //   xml += `<uf>${data.uf}</uf>\n`;
  //   xml += `<fone>${data.telephone}</fone>\n`;
  //   xml += '</contato>\n';


    
  //   const postData = `apikey=${api_key}&xml=${xml}`;
  //   const options = {
      
  //     method: 'POST',
  //     headers: {
  //       'Access-Control-Allow-Origin':'*',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Content-Length': postData.length.toString(),
  //     },
  //     body: postData,
  //   };
  
  //   try {
  //     const response = await fetch(url_base, options);
  //     const responseData = await response.text();
  //     console.log(`Response Body: \r\n ${responseData}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  }

export default CreateBlingNewContact;



















// import { formPayload } from '@/interfaces/IformPayload';
// import { request } from 'http';


// async function CreateBlingNewContact(apiKey:string, obj:formPayload) {
//     try {

//        
 
  
//  await fetch(`https://bling.com.br/Api/v2/contato//xml?${xml}&apikey=${apiKey}`, {
//     method: 'POST',
//     mode:'no-cors'
// }) .then((response) => {
// })
// .catch((error) => {
//   console.error(error);
// });
  
//     }
    
 
      
//   export default CreateBlingNewContact;