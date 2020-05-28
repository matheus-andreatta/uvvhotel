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

}


