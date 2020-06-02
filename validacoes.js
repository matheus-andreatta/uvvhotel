function validaDataSaida(){
  // PEGAMOS OS VALORES DE DATA DO FORMULARIO
  let dataEntrada = cadastro_usuario.data_entrada.value;
  let dataSaida = cadastro_usuario.data_saida.value;

  // CONVERTEMOS OS VALORES DO FORMULÁRIO PARA PODER CALCULAR A DIFERENÇA DE HORÁRIO
  let dataEntradaConvert = new Date(dataEntrada);
  let dataSaidaConvert = new Date(dataSaida);

  
  // VERIFICAMOS SE O HORÁRIO DE ENTRADA É MENOR QUE O DE SAIDA
  if (dataEntradaConvert.getTime() >= dataSaidaConvert.getTime()) 
    window.alert('Data de saída deve ser mais antiga que de entrada');
  else
    document.clear();
    document.write('<img style="display:block;margin:0 auto;" src="assets/img/complete_form.gif" alt="" srcset="">');
}


function computaValorDaEstadia(){
  // PEGAMOS A DATA DE ENTRADA E SAÍDA
  let dataEntrada = cadastro_usuario.data_entrada.value;
  let dataSaida = cadastro_usuario.data_saida.value;

  // PEGAMOS O VALOR DA DIÁRIA DA CATEGORIA
  let valorDaCategoria = cadastro_usuario.inputCategoria.value;

  // CONVERTEMOS OS VALORES DO FORMULÁRIO PARA PODER CALCULAR A DURAÇÃO
  let dataEntradaConvert = new Date(dataEntrada);
  let dataSaidaConvert = new Date(dataSaida);

  //CONVERTEMOS PARA MILISEGUNDOS E SUBTRAIMOS O VALOR
  let duracaoDaEstadia = (dataSaidaConvert.getTime() - dataEntradaConvert.getTime());

  // ACHAMOS O VALOR DE DURAÇÃO EM DIAS
  let diasDeEstadia = (duracaoDaEstadia / (1000*60*60*24));

  // SETAMOS UM VARIÁVEL PARA O TOTAL DO VALOR
  let totalDoValor = 'Calculando...';


  //VERIFICAMOS SE A ESTADIA TEM DURANÇÃO MINIMA MAIOR QUE 0
  if (diasDeEstadia > 0) {
    totalDoValor = diasDeEstadia*valorDaCategoria;
  }

  // CHAMANDO A FUNÇÃO INSERIR NO HTML
  inserirNoHtml(totalDoValor);

  //CHAMANDO A FUNÇÃO INSERIR A CATEGORIA
  InserirCategoria();

}

  // FUNÇÃO PARA INSERIR VALOR NO HTML

function inserirNoHtml(valor){

  document.getElementById('inputValor').innerHTML = valor;
}


// FUNÇÃO PARA INSERIMOS AS CARACTÉRISTICAS DE CADA CATEGORIA NO FORMULÁRIO
function InserirCategoria(){
  // PEGAMOS O VALOR DO TIPO DA CATEGORIA
  let tipoCategoria = document.getElementById('inputCategoria').value;
  
  // PEGAMOS O CAMPO ONDE SERA INSERIR O TEXTO REFERENTE AS CARACTERISTICAS DOS QUARTOS
  let listaDeOferecidos = document.getElementById('oferecido_quarto')

  // LISTA DE CARACTERISTICAS DOS QUARTOS
  oferecido = [
    'Cama de solteiro, mesa, banho',
    'Cama de solteiro, mesa, banho e serviço de quarto e TV',
    'Cama de casal, mesa, banho',
    'Cama de casal, mesa, banho, serviço de quarto e TV',
  ]

  // CONDICIONAL PARA CADA TIPO DE QUARTO, SENDO SEPARADA PELO VALOR DE CADA UM
  // E CHAMANDO O VALOR DA LISTA ACIMA.
  switch (tipoCategoria){
    case '50':
      listaDeOferecidos.innerHTML = oferecido[0];
      break;
    case '100':
      listaDeOferecidos.innerHTML = oferecido[1];
      break;
    case '150':
      listaDeOferecidos.innerHTML = oferecido[2];
      break;
    case '200':
      listaDeOferecidos.innerHTML = oferecido[3];
      break;
  }

}


