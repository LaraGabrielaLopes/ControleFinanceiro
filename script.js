//Persistir dados no localStorage:

var listaMercadoriaRaw = localStorage.getItem('listaMercadoria')
if (listaMercadoriaRaw != null) {
    var listaMercadoria = JSON.parse(listaMercadoriaRaw)
} else {
    var listaMercadoria = [];
}

desenhaTabela()

//Função para desenhar a tabela:

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
        </tr>`
    }
}

function testaFormulario(e) {
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

    if (listaMercadoria != null) {
        desenhaTabela()
    }
}
 //A ÚLTIMA TRANSAÇAO SÓ APARECE DEPOIS DE ATUALIZAR A PÁGINA ???????????????????????????????????????????????????????

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



























/*var listaMercadoria = [
    {
        transacao: document.querySelector('')
    }
]

var listaMercadoriaRaw = localStorage.getItem('listaMercadoria')
if (listaMercadoriaRaw != null) {
    var listaMercadoria = JSON.parse(listaMercadoriaRaw)
} else {
    var listaMercadoria = []
}

function testaFormulario(e) {
    e.preventDefault();
    
    var listaMercadoriaRaw = localStorage.getItem('listaMercadoria')
    if (listaMercadoriaRaw != null) {
        var listaMercadoria = JSON.parse(listaMercadoriaRaw)
    } else {
        var listaMercadoria = []
    }

    console.log(listaMercadoria)
}


//Formar tabela com os dados adicionados no formulário:
function adicionarTransacao() {
    var listaMercadoria = [
        {
            transacao: document.getElementById('campos-input').value,
            mercadoria: document.getElementById('campo-mercadoria').value,
            valor: document.getElementById('campo-valor').value
        }  
    ]

    for (geral in listaMercadoria) {
        document.querySelector('table.tabela tbody').innerHTML += 
        `
        <tr>
            <td>${listaMercadoria[geral].transacao}</td>
            <td>${listaMercadoria[geral].mercadoria}</td>
            <td>${listaMercadoria[geral].valor}</td>
        </tr>
        `
    }

}

// Remover os dados da tabela quando clicar no link "Limpar Dados":
function limparDados() {
    document.querySelector('table.tabela tbody').innerHTML = 'Nenhuma mercadoria cadastrada' 
}
*/































