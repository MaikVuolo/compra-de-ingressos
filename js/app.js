let pistaQuantidade = 100;
let superirorQuantidade = 200;
let inferiorQuantidade = 400;

function comprar(){
    let ingresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);
   
    //soma de quantos ingresos foram requisitados

    if(ingresso === "superior") {
        funcaoSuperior(quantidade);
    }

    if (ingresso === "inferior"){
      funcaoInferior(quantidade);

    }
    if(ingresso === "pista"){
      funcaoPista(quantidade);
    }
    
  console.log(quantidade);


}

function funcaoSuperior(quantidade){
  if (quantidade < 0){
    alert ("numero negativo ou nulo");
    document.getElementById("qtd").value = ""
    } else if((superirorQuantidade - quantidade) >= 0){
      superirorQuantidade = superirorQuantidade - quantidade;
      document.getElementById("qtd-superior").innerText = superirorQuantidade;
      document.getElementById("qtd").value = "";
      }else{
      alert("quantidade desejada indisponivel para cadeira superior");
    }

}

function funcaoInferior(quantidade){
  if (quantidade < 0){
  alert ("numero negativo ou nulo");
  document.getElementById("qtd").value = ""
    } else if((inferiorQuantidade - quantidade) >= 0){
      inferiorQuantidade = inferiorQuantidade - quantidade;
      document.getElementById("qtd-inferior").innerText = inferiorQuantidade;
      document.getElementById("qtd").value = "";
      }else{
      alert("quantidade desejada indisponivel para cadeira inferior");
        }
  }


    function funcaoPista(quantidade){
      if (quantidade < 0){
        alert ("numero negativo ou nulo");
        document.getElementById("qtd").value = ""
        } else if((pistaQuantidade - quantidade) >= 0){
          pistaQuantidade = pistaQuantidade - quantidade;
          document.getElementById("qtd-pista").innerText = pistaQuantidade;
          document.getElementById("qtd").value = "";
          }else{
          alert("quantidade desejada indisponivel para pista");
            }
      }
    






