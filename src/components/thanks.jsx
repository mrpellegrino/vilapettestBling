import Script from 'next/script'
import React from 'react'
import link from 'next/link';
import {useEffect} from 'react';

useEffect(() => { 
  setTimeout(function() {
  window.location.href = <link>"http://www.devmedia.com.br"</link>}, 5000); }, []);


        const thanks = ({handleChangeField,formState}) => {
        return (
        <div>  <h2>Muito Obrigado pelo seu cadastro!</h2>
          <p>O Cadastro foi executado com sucesso, você será redirecionado novamente ao nosso Whatsapp.</p>
        </div>
          )
      }

      export default thanks;
      