//codigo del cuadrado
console.group("cuadrados");

    /* const ladoCuadrado = 5;
        console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

    function perimetroCuadrado(lado) {
        return lado * 4 ;
    } 
        /* console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm"); */

    /* const areaCuadrada = ladoCuadrado * ladoCuadrado; */
    function areaCuadrada(lado) {
        return lado * lado;
    }
/*         console.log("El area del cuadrado es: " + areaCuadrada + "cm^2");
 */
console.groupEnd();


//codigo del triangulo
console.group("triangulos");

/*   const ladotringulo1 = 6;
    const ladotringulo2 = 6;
    const baseTriangulo = 4;

        console.log("los lados del triangulo son: " + ladotringulo1 + "cm " + 
        ladotringulo2 + "cm " + baseTriangulo + "cm ");

    const alturaTriangulo = 5.5;
        console.log("la altura del triangulo es: " + alturaTriangulo + "cm"); */ 


    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;

    }
    /*     console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm"); */
/* 
    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2  (old way)*/ 
    function areaTriangulo(base, altura){
        return (base * altura) / 2;
    }

       /*  console.log("El area del triangulo es: " + areaTriangulo + "cm^2"); */

console.groupEnd();

    //codigo del circulo 
    console.group("circulo");

    /* // Radio
    const radioCirculo = 4;
        console.log("el radio del circulo es: " + radioCirculo + "cm ");
 */
    //diametro
/*     const diametroCirculo = radioCirculo * 2;
 */    function diametroCirculo(radio){
        return radio * 2;
        
 }

    //PI
    const PI = Math.PI;
        console.log("el pi del circulo es: " + PI + "cm ");

    //Circunferencia
/*     const perimetroCirculo = diametroCirculo * PI; */
    function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
        return diametro * PI;
    }
       /*  console.log("el perimetro del circulo es: " + perimetroCirculo + "cm "); */

    //Area
/*     const areaCirculo = (radioCirculo * radioCirculo) * PI;
 */    function areaCirculo(radio){
        return (radio * radio) * PI;
 }
 
  /*       console.log("el area del circulo es: " + areaCirculo + "cm^2 "); */

    console.groupEnd;

    // Aqui interactuamos con el html

    function calcularPerimetroCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;


        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    }


    function calcularAreaCuadrada(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;


        const area = areaCuadrada(value);
        alert(area);
    }