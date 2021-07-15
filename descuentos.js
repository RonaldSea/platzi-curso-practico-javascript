const descuentos = (precio, porcentaje) => (precio * (100 - porcentaje))/100;
const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function calcularPrecioConDescuento() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
  
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;


    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const porcentaje = userCoupon.discount;
        const precioConDescuento = descuentos(priceValue, porcentaje);
    
        const resultP = document.getElementById("resultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}