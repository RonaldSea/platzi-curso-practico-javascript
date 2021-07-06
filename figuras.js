// Código del cuadrado
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado * lado;

// Código del triángulo
const perimetroTriangulo = (lado, base) => lado + lado + base;
const areaTriangulo = (lado, base) => {
    const alturaTriangulo = Math.sqrt(lado**2 - base**2/4);
    return (base * alturaTriangulo)/2;
}

// Código círculo
const diametroCirculo = radio => radio * 2;
const perimetroCirculo = radio => diametroCirculo(radio) * Math.PI;
const areaCirculo = radio => Math.PI * radio**2;