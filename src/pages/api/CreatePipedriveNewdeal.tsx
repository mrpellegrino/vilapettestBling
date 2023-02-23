import { formPayload } from '@/interfaces/IformPayload';


async function  CreatePipedriveNewdeal(formState:formPayload)
{

const tutor =formState.name;
const cpf =formState.cpf;
const address =formState.address;
const telephone =formState.telephone;
const zipCode =formState.zipCode;   
const neighborhood =formState.neighborhood;
const addressNumber =formState.addressNumber;
const addressComplement =formState.addressComplement;
const city =formState.city;
const petName =formState.petName;
const species =formState.species;
const gender =formState.gender;
const breed =formState.breed;
const temperament =formState.temperament;
const coatColor =formState.coatColor;
const petWeight =formState.petWeight;
const birthday =formState.birthday;
const castrated =formState.castrated;
const service =formState.service;
const veterinaryDescription=formState.veterinaryDescription;

    const api_token = '4eb75180f20983ca454feb40fd0616485a0e5af1';
    const base_url = 'https://vilapetbrasil.pipedrive.com/api/v1';

    try {

      
        // add a person
        const addPersonFormData = new FormData();

        addPersonFormData.append('name', tutor);
        addPersonFormData.append('phone', telephone);
        addPersonFormData.append('1b4c959c21faf49ae39634444f284248efbcf1ad', cpf);
        addPersonFormData.append('9953b8b995c0770ecba08abae1cdcb7d770964fa', address);
        addPersonFormData.append('56f4072cc67f6684c77d6015acd75db7baa68f99', zipCode);
        addPersonFormData.append('c3ce77ac54f97b2599608f1cd659808f21df9c25', neighborhood);
        addPersonFormData.append('e2095ef6c479aa9bea3b062f9b5f0709a431c4da', addressNumber);
        addPersonFormData.append('fc2cb1c4ada8432629d40ffea62aaf00c5930499', addressComplement);
        addPersonFormData.append('ff722b6b8b033a62836582d6672d6a30ee611cb2', city);
    

    const personResponse = await fetch(`${base_url}/persons?api_token=${api_token}`, {
        method: 'POST',
        body: addPersonFormData,
    });

    
    const clonePersonResponse = await personResponse.clone().json();
   
    const personId = clonePersonResponse.data.id;
    const name = clonePersonResponse.data.name;

    // add a lead
    const addLeadFormData = JSON.stringify({
        title: name,
        person_id: personId,
    });

    const addLeadHeaders = new Headers();
    addLeadHeaders.append('Content-Type', 'application/json');
    
    await fetch(`${base_url}/leads?api_token=${api_token}`, {
        method: 'POST',
        body: addLeadFormData,
        headers: addLeadHeaders,
    });

    // add a deal
    const addDealFormData = new FormData();

    
    addDealFormData.append('person_id', personId);
    addDealFormData.append('title', name);
    addDealFormData.append('78f84bf9366de7b38f80835c0f5112a84886fc00', petName);
    addDealFormData.append('2481beda85f7c9161fa0a697997d3ec94c2b7dae', species);
    addDealFormData.append('503d945eb5f5df732f7acd70899fd7cbca142536', name);
    addDealFormData.append('bd85167a03ffbe413adbe69767425c71c01d6113', telephone);
    addDealFormData.append('84602f5bb24d6783fdc06c7c5fec95c8da90c07d', breed);
    addDealFormData.append('7273a5627609bf0cc1bfb87989cef5ec4f74b785', temperament);
    addDealFormData.append('033bcba2aac22c9366b5bae1a612d0cd68245ade', coatColor);
    addDealFormData.append('7bb19195388f8ae1b0f68828c053161032b368f0', petWeight);
    addDealFormData.append('8b7b53599142a2af95bff6ecf3560fdaef542dff', birthday);
    addDealFormData.append('5f8f0d9d38818a0490ea4f8d8b56d5085bc8d531', castrated);
    addDealFormData.append('bcfa630d615fefdbd0a255cd15065af45348c30c', veterinaryDescription);
    

    const dealResponse = await fetch(`${base_url}/deals?api_token=${api_token}`, {
        method: 'POST',
        body: addDealFormData,
    });

    const cloneDealResponse = await dealResponse.clone().json();

    const dealId = cloneDealResponse.data.id;


    
         if(service =='veterinaryServices')
         {
            const addProductDealFormData = JSON.stringify({
                quantity: 1,
                item_price:300,
                product_id: 9,
            });
            const addProductDealHeaders = new Headers();
            addProductDealHeaders.append('Content-Type', 'application/json');

            await fetch(`${base_url}/deals/${dealId}/products?api_token=${api_token}`, {
                method: 'POST',
                headers: addProductDealHeaders,
                body: addProductDealFormData,
            });
        }
        else{
            const addProductDealFormData = JSON.stringify({
                quantity: 1,
                item_price:50,
                product_id: 1,
            });
            const addProductDealHeaders = new Headers();
            addProductDealHeaders.append('Content-Type', 'application/json');

            await fetch(`${base_url}/deals/${dealId}/products?api_token=${api_token}`, {
                method: 'POST',
                headers: addProductDealHeaders,
                body: addProductDealFormData,
            });
        }
} catch (err) {

    alert('Erro ao enviar formulário. Tente novamente mais tarde.');
}
}



export default CreatePipedriveNewdeal;