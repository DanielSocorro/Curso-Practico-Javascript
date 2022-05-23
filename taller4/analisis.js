const salariosVen = venezuela.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosVenSorted = salariosVen.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB
    }
);
function esPar(numero){
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
function medianaSalarios(lista){
    const mitad = parseInt(lista.legth / 2);
    if (esPar(lista.legth)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
console.log(
    medianaSalarios(salariosVenSorted)

);