/* const precioOriginal = 120;
const descuento = 18;
 */
/* function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100; 
    return precioConDescuento;
}

function buttonPriceDiscount(){
const InputCoupon = document.getElementById("InputCoupon");
const PriceValue = InputCoupon.value;

const InputDiscount = document.getElementById("InputDiscount");
const discountValue = InputDiscount.value;

const precioConDescuento = calcularPrecioConDescuento(PriceValue, discountValue);

const resultP = document.getElementById("ResultP");
resultP.innerText = "El precio con el descuento son: $ " + precioConDescuento;

} */

const coupons = [
    "juanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

const InputCoupon = document.getElementById("InputCoupon");
const PriceValue = InputCoupon.value;

function buttonPriceDiscount(){
    const InputPrice = document.getElementById("InputPrice");
    const PriceValue = InputPrice.value;
    
    const InputCoupon = document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value;

    let descuento;

    switch(couponValue){
        case coupons[0]: // JuanDC_es_Batman"
        descuento = 15;
        break;
        case coupons[1]: // pero_no_le_digas_a_nadie"
        descuento = 30;
        break;
        case coupons[2]: //"es_un_secreto"
        descuento = 25;
        break;
    }

    
    const precioConDescuento = calcularPrecioConDescuento(PriceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con el descuento son: $ "
     + precioConDescuento;
}
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100; 

}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,

}); */