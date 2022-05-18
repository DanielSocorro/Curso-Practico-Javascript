console.group("trianguloIsósceles");

function altura(lado1, lado2, base){
    if (lado1 === lado2 && lado1 !=base){
        console.log("triangulo isosceles a la vista");
        return Math.sqrt((lado1**2) - ((base/2)**2));
    } else {
        console.log("los lados no son iguales, vuelve a intentarlo");
    }
}
altura();
console.groupEnd();