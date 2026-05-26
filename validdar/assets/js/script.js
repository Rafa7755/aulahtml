const formulario  = document.getElementById
('formulario')
//campos
const nome = document.getElementById('nome')
   const email = document.getElementById('email')
   const senha  = document.getElementById('senha')

const erroNome = document.getElementById('erroNome')
const erroEmail= document.getElementById('erroEmail')
const erroSenha= document.getElementById('erroSenha')
//adicionar evento de envio

formulario.addEventListener('submit',function(event){
    //impede que recarregue a pagina
    console.log(formulario)
   event.preventDefault();

   
  
   if(nome.value === ''){

    erroNome.innerHTML = 'o nome é obrigatório';

   }
   if(email.value === ''){

    erroEmail.innerHTML = 'o email é obrigatorio'

  /* }else if (!email.value.include('@')){
    erroEmail.innerText = 'dite um e-mail valido'
   }*/
   if(senha.value ===''){

    erroSenha.innerHTML = 'a senha é obrigatoria'
   }else if(senha.value.length < 5){
  erroSenha.innerText = 'a senha de 5 caracteres'  
   }

}
}
)
