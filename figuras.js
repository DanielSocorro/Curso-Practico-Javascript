//codigo del cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden:" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es:" + areaCuadrada + "cm^2");
console.groupEnd();

//codigo del triangulo
console.group("triangulos");
const ladotringulo1 = 6;
const ladotringulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladotringulo1 + ladotringulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

console.log("los lados del triangulo son: " + ladotringulo1 + "cm " + ladotringulo2 + "cm " + baseTriangulo + "cm ");

console.log("la altura del triangulo es: " + alturaTriangulo + "cm");

console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

console.log("El area del triangulo es: " + areaTriangulo + "cm");

console.groupEnd();

//codigo del circulo 
    console.group("circulo");

// Radio
    const radioCirculo = 4;
    console.log("el radio del circulo es: " + radioCirculo + "cm ");
//diametro
    const diametroCirculo = radioCirculo * 2;
    console.log("el diametro del circulo es: " + diametroCirculo + "cm ");
//PI
    const PI = Math.PI;
    console.log("el pi del circulo es: " + PI + "cm ");
//Circunferencia
    const perimetroCirculo = diametroCirculo * PI;
    console.log("el perimetro del circulo es: " + perimetroCirculo + "cm ");
//Area
    const areaCirculo = (radioCirculo * radioCirculo) * PI;
    console.log("el area del circulo es: " + areaCirculo + "cm ");
    console.groupEnd;