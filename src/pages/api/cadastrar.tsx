import CreatePipedriveNewdeal from './CreatePipedriveNewdeal';
import formPayload from '../../interfaces/IformPayload';
import CreateBlingNewContact from './CreateBlingNewContact';



    function cadastrar(FormPayload:formPayload)
    {
    
            try
            {
              //  CreatePipedriveNewdeal(FormPayload);

                CreateBlingNewContact(FormPayload)
            }
            catch (err) {

                alert('Erro ao enviar formulário. Tente novamente mais tarde.');
            }

            return true;
            
    }

    export default cadastrar;