function alturaTrianguloIsosceles (TGladoA, TGladoB, TGladoBase){
    if (TGladoA != TGladoB){
    console.error("los lados a y b no son iguales");
    } else {
     
        const TPladoB = TGladoBase / 2;
        const TPladoBase = TGladoA;

        const TPladoB2 = TPladoB * TPladoB;
        const TPladoBase2 = TPladoBase * TPladoBase; 

        const TPladoA = Math.sqrt(TPladoBase2 - TPladoB2)

        const TGaltura = TPladoA;
        return TGaltura;  
    }
}
//TGladoA = TrianguloGrandeladoA
//TPladoB = TrianguloPequeñoladoB
//TPladoBase2 = TrianguloPequeñoladoBase al cuadrado