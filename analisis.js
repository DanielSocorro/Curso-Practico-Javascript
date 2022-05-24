    //helpers
    function esPar(numero) {
    return (numero & 2 === 0);
 }

    function calcularMediaAritmetica(lista) {
     const sumaLista = lista.reduce(
          function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
          }
      );
      const promedioLista = sumaLista / lista.length;
      return promedioLista;
  }

    //Calculadora de mediana
    function medianaSalarios(lista) {
        const mitad = parseInt(lista.length / 2);

        if (esPar(lista.length)) {
            const personaMitad1 = lista[mitad - 1];
            const personaMitad2 = lista[mitad];

            const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
            return mediana;
        }   else {
            const personaMitad = lista[mitad];
            return personaMitad;
     }
}

    //Mediana General
    const salariosVen = venezuela.map(
    function (persona) {
        return persona.salary;
    }
);
    const salariosVenSorted = salariosVen.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);
    const medianaGeneralVen = medianaSalarios(salariosVenSorted);


    // Mediana del top 10%
    const spliceStart = parseInt(salariosVenSorted.length * 90) / 100;
    const spliceCount = salariosVenSorted.length - spliceStart;

    
    const salariosVenTop10 = salariosVenSorted.splice(
        spliceStart,
        spliceCount,
    );

    const medianaTop10Ven = medianaSalarios(salariosVenTop10);

    console.log({
        medianaGeneralVen,
        medianaTop10Ven,
        

});