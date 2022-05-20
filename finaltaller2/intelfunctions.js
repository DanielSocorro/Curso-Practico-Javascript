function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  
  }
  
  function onClickButtonPriceDiscount() {
      const inputPrice = document.getElementById("InputPrice");
      const priceValue = inputPrice.value;
      
      const inputCoupon = document.getElementById("inputCoupon");
      const couponValue = inputCoupon.value;
  
      const resultCoupon = document.getElementById("priceWithCoupon")
    
      let descuento;
      let precioConDescuento; 
    
      switch(true) {
        case couponValue === "ok":
          descuento = 15;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dollars`
        break;
        case couponValue === "better":
          descuento = 30;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dollars`
        break;
        case couponValue === "awesome":
          descuento = 25;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dollars`
        break;
        default:
          resultCoupon.innerText = "el cupón ingresado no es valido"
      }
  }
  