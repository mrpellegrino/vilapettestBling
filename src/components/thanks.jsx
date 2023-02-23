
import React from 'react'


import Head from 'next/head';




        const thanks = ({handleChangeField,formState}) => {
          const name = formState.name;
          const cpf = formState.cpf;
          const url= "5; url='https://wa.me/5531975166552?text=Concluí meu cadastro com sucesso. Nome:*"+formState.name+"* Cpf:*"+formState.cpf+"*";
        return (
          <>
        <div>  <h2>Muito Obrigado pelo seu cadastro!</h2>
          <p>O Cadastro foi executado com sucesso, você será redirecionado novamente ao nosso Whatsapp.</p>
        </div> 
        <Head> 
        <meta http-equiv="refresh" content={url} />
        </Head>
        </>
        )
         
         

      }

      export default thanks;
      