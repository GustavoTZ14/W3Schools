try {
  adddlert("Welcome guest"); // Instrução permite que defina um bloco de código a ser testado quanto a erros enquanto ele está sendo executado.
}
catch (err) {
  console.log(err.message); // Instrução permite que defina um bloco de código a ser executado, caso ocorra um erro no bloco try
}
finally {
  console.log("erro 501"); // Instrução permite que execute código, após try e cath, independentemente do resultado
}
