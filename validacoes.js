function validaDataSaida(){
  let dataEntrada = cadastro_usuario.data_entrada.value;
  let dataSaida = cadastro_usuario.data_saida.value;

  let dataEntradaConvert = new Date(dataEntrada);
  let dataSaidaConvert = new Date(dataSaida);

  if (dataEntradaConvert.getTime() >= dataSaidaConvert.getTime()) 
    window.alert('Data de saída deve ser mais antiga que de entrada');
  else
    document.write('Boa viagem!');
  
}



function computaValorDaEstadia(){
  let dataEntrada = cadastro_usuario.data_entrada.value;
  let dataSaida = cadastro_usuario.data_saida.value;
  let valorDaDiáriaEmReais = 200;

  //CONVERSÃO DA DATA
  let dataEntradaConvert = new Date(dataEntrada);
  let dataSaidaConvert = new Date(dataSaida);

  //DURACAO EM MILISEGUNDOS
  let duracaoDaEstadia = (dataSaidaConvert.getTime() - dataEntradaConvert.getTime());

  //DURAÇÃO EM DIAS
  let diasDeEstadia = (duracaoDaEstadia / (1000*60*60*24));

  let totalDoValor = 'Calculando...';

  if (diasDeEstadia > 0) {
    totalDoValor = diasDeEstadia*valorDaDiáriaEmReais;
  }

  inserirNoHtml(totalDoValor);

}


function inserirNoHtml(valor){
  document.getElementById('inputValor').innerHTML = valor;
}


