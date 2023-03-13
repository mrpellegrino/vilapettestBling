async function CreateBlingNewContact(apiKey, obj) {
    try {

        let xml = '';
  xml += '<contato>\n';
  xml += `<nome>${obj.name}</nome>\n`;
  xml += `<fantasia>${obj.petName}</fantasia>\n`;
  xml += `<contribuinte>9</contribuinte>\n`;
  xml += `<cpf_cnpj>${obj.cpf}</cpf_cnpj>\n`;
  xml += `<endereco>${obj.address}</endereco>\n`;
  xml += `<numero>${obj.addressNumber}</numero>\n`;
  xml += `<complemento>${obj.addressComplement}</complemento>\n`;
  xml += `<bairro>${obj.neighborhood}</bairro>\n`;
  xml += `<cep>${obj.zipCode}</cep>\n`;
  xml += `<cidade>${obj.city}</cidade>\n`;
  xml += `<uf>${obj.uf}</uf>\n`;
  xml += `<fone>${obj.telephone}</fone>\n`;
  xml += '</contato>\n';
 


      const url = 'https://bling.com.br/Api/v2/contato/';
      const formData = new URLSearchParams();
      formData.append('apikey', apiKey);
      formData.append('xml', xml);
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      const data = await response.text();
      console.log(`Response Body:\n${data}`);
    } catch (error) {
      console.error(error);
    }
  }

  export default CreateBlingNewContact;