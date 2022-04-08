var pacientes = [];
   
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");
    var btAdicionar = document.getElementById("btAdicionar");
    var btListar = document.getElementById("btListar");
    var btFiltrar = document.getElementById("btFiltrar");
    var outLista = document.getElementById("outLista");
   
btAdicionar.addEventListener("click", adicionarpacientes);
    function adicionarpacientes(){
   
    var modelo = inModelo.value;
        var preco = Number(inPreco.value);
       
        if(modelo == "" || preco == 0 || isNaN(preco)){
        alert("Informe corretamente os dados");
            inModelo.focus();
            return;
            }
           
            pacientes.push({ modelo: modelo, preco: preco });
           
            inModelo.value = "";
            inPreco.value = "";
            inModelo.focus();
           
            listarpacientes();
            }
           
            btListar.addEventListener("click", listarpacientes);
            function listarpacientes(){
            if (pacientes.length == 0){
            alert("Não há Pacientes na lista");
            return;
            }
           
            var lista = "";
           
            for (var i = 0; i < pacientes.length; i++) {
            lista += pacientes[i].modelo + " Prioridade: " + pacientes[i].preco + "\n";
                }
                outLista.textContent = lista
                }
               
                btFiltrar.addEventListener("click", filtrarpacientes);
                function filtrarpacientes(){
                var maximo = Number(prompt("(Digite o numero da prioridade)"));
                   
                    if (maximo == 0 || isNaN(maximo)){
                    return;
                    }
                   
                    var lista = "";
                   
                    for (var i = 0; i < pacientes.length; i++) {
                   
                    if (pacientes[i].preco >= maximo) {
                    lista += pacientes[i].modelo + " Prioridade " + pacientes[i].preco + "\n";
                       
                   
                   }
                   if (lista == ""){
                    outLista.textContent = "Não há pacientes no momento!" + maximo;
                  }
                  else{
                  outLista.textContent = "(Prioridades)Cands ap: " + "\n----------\n" + lista;
                    }
                    }
                    }
