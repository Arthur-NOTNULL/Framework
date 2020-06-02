



function apagarUsuario(id){
  Swal.fire({
    title: 'Confirmar a exclusão do Produto?',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim'
  }).then((result) => {
    if (result.value) {
      let usuarioIndex = produtos.findIndex(produto => produto.id == id);
      if(usuarioIndex >= 0){
        produtos.splice(usuarioIndex,1);
        if(produtos.length > 0){
          listarProdutos();
        }else{
          row = document.getElementById("tbody");
          row.innerHTML = "";
        }
      }
      Swal.fire(
        'Produto excluído!',
        '',
        'success'
      )
    }
  });
}

function editarUsuario(id){
  for(let i = 0; i < produtos.length; i++){
    if(produtos[i].id == id){
      document.getElementById("pid").value = produtos[i].pid;
      document.getElementById("pnome").value = produtos[i].pnome;
      document.getElementById("descricao").value = produtos[i].descricao;
      document.getElementById("quantidade").value = produtos[i].quantidade;
      document.getElementById("preco").value = produtos[i].preco;
      

    }

  }
}



function limpar(){
  document.getElementById("pnome").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("preco").value = "";
}



/*localStorage.setItem() para criar um novo par de chave: valor;
localStorage.getItem() para recuperar o valor do par chave: valor;
localStorage.removeItem() para remover um par específico;
localStorage.clear() apaga TODOS os pares gravados pro aquele domínio*/ 