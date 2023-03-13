import CreatePipedriveNewdeal from './CreatePipedriveNewdeal';
import {formPayload} from '../../interfaces/IformPayload';
import CreateBlingNewContact from './CreateBlingNewContact';



    function cadastrar(FormPayload:formPayload)
    {
    
            try
            {
              //  CreatePipedriveNewdeal(FormPayload);

                CreateBlingNewContact('28691ee9e7947997cb1c45d23ba1b9752db747cb88902d37fd0b8b7a2fdae6b35d621f8c',FormPayload)
            }
            catch (err) {

                alert('Erro ao enviar formulário. Tente novamente mais tarde.');
            }

            return true;
            
    }

    export default cadastrar;