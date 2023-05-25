//Persistir dados no localStorage:

var listaMercadoriaRaw = localStorage.getItem('listaMercadoria')
if (listaMercadoriaRaw != null) {
    var listaMercadoria = JSON.parse(listaMercadoriaRaw)
} else {
    var listaMercadoria = [];
}

desenhaTabela()

//Máscara:

function testaCampoValor(e) {
    e.preventDefault()

    if((/[0-9 ]/g).test(e.key) && e.target.value.length < 18) {
        e.target.value += e.key
    }

    var meuInput = Number(e.target.value.replace(/[^0-9]+/g, ""));
    meuInput = meuInput / 100;
    inputFormatado = meuInput.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });
  
    e.target.value = inputFormatado;
}

//Desenhar a tabela:

function desenhaTabela() {

    linhasExistentes = [...document.querySelectorAll('table.tabela tbody .conteudo-dinamico')];
    linhasExistentes.forEach((element) => {
        element.remove()
    })
    
    for (merc in listaMercadoria) {
        document.querySelector('table.tabela tbody').innerHTML +=
        `<tr class="conteudo-dinamico">
            <td>${listaMercadoria[merc].tipoTransacao}</td>
            <td>${listaMercadoria[merc].nomeMercadoria}</td>
            <td>${listaMercadoria[merc].valor}</td>
        </tr>
        `
    }

}
   
    /*document.querySelector('table.tabela tfoot').innerHTML += `
    <tr>
        <td>Total</td>
        <td></td>
        <td style="text-align:right; display: block;" id="valor-total"><strong>${totalFormatado}</strong>
        <p>${total > 0 ? "[LUCRO]" : total < 0 ? "[PREJUÍZO]" : ""}</p>
        </td>
    </tr>`;*/
     


function cadastrarTransacao(e) {
    e.preventDefault()

    var listaMercadoriaRaw = localStorage.getItem('listaMercadoria')
    if (listaMercadoriaRaw != null) {
        var listaMercadoria = JSON.parse(listaMercadoriaRaw)
    } else {
        var listaMercadoria = [];
    }
    
    listaMercadoria.push({
        tipoTransacao: e.target.elements['campos-input'].value,
        nomeMercadoria: e.target.elements['campo-mercadoria'].value,
        valor: e.target.elements['campo-valor'].value,
    })

    localStorage.setItem('listaMercadoria', JSON.stringify(listaMercadoria));

    function limparCamposInput() {
        document.getElementById('campos-input').value = "-";
        document.getElementById('campo-mercadoria').value = "";
        document.getElementById('campo-valor').value = "";
    }

    limparCamposInput()
    desenhaTabela()

  }

  

 //A ÚLTIMA TRANSAÇAO SÓ APARECE DEPOIS DE ATUALIZAR A PÁGINA ???????????????????????????????????????????????????????



//Limpar tabela:
function limparTabela() {
    document.querySelector('table.tabela tbody').innerHTML = "";
    document.querySelector('table.tabela tfoot').innerHTML = "";
}

function limparDados(merc) {
    if (confirm("Tem certeza que deseja limpar os dados da pagina?") == true) {
      localStorage.clear();
      listaMercadoria = [];
      limparTabela();
      desenhaTabela();
    }
}






























