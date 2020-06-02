const usuarios = []; // array para receber os objetos do tipo usuario

function salvarUsuario(){
    
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  let id = usuarios.length;

  localStorage.sid = id++;
  localStorage.snome = nome;
  localStorage.sendereco = endereco;
  localStorage.stelefone = telefone;
  localStorage.semail = email;
  
  localStorage.ssenha = senha;
  
  const usuario = {id: Date.NOW ,nome, endereco, telefone, email , senha};
  usuarios.push(usuario);
  
  Swal.fire({
    
    icon: 'success',
    title: 'Usuário cadastrado com sucesso!',
    showConfirmButton: false,
    timer: 1500
  });
  

  var delay = 2000; 
  setTimeout(function(){
    window.location.href = "login.html";
          
  },delay);
  
  
}

function logar(){
    
    userl = document.getElementById("usuario").value;
    passoword = document.getElementById("lsenha").value;

    if(userl == "" || passoword == ""){
        Swal.fire({
    
            icon: 'warning',
            title: 'Dígite em todos os campos',
            showConfirmButton: false,
            timer: 800
          });
    }else{

    if(localStorage.semail == userl & localStorage.ssenha == passoword){
     window.location.href = "Minicial.html";

    }else{
        document.getElementById("erro").innerHTML = "Usuario ou senha incorreto!\nTente Novamente...";        
    }
    }
}
function Alterarsenha(){
  const id = document.getElementById("id").value;
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("nsenha").value;
  

  
  usuarios[id] = {id,nome, endereco, telefone, email , senha};
  
 
 

  
  

  Swal.fire({
    
    icon: 'success',
    title: 'Senha Atualizada com sucesso!',
    showConfirmButton: false,
    timer: 1500
  });
  var delay = 2000; 
  setTimeout(function(){
    window.location.href = "Minicial.html";
          
  },delay);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



