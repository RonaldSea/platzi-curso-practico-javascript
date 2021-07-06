// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cms.`);

const perimetroCuadrado = ladoCuadrado *4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cms.`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado} cms cuadrados`)
console.groupEnd();

// Código del triángulo
console.group("Triángulo");
const ladoTriangulo1 = 3;
const ladoTriangulo2 = ladoTriangulo1;
const baseTriangulo = 2;
const alturaTriangulo = Math.sqrt(ladoTriangulo1**2 - baseTriangulo**2/4).toFixed(2);
console.log(`Los lados del triángulo miden: ${ladoTriangulo1} cms, ${ladoTriangulo2} cms, ${baseTriangulo} cms.`);
console.log(`La altura del triángulo es de ${alturaTriangulo} cms.`)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cms.`);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log(`El área del cuadrado es: ${areaTriangulo} cms cuadrados.`);
console.groupEnd();

// Código círculo
console.group("Círculo");
// Radio
const radioCirculo = 4;
// Diámetro
const diametroCirculo = radioCirculo * 2;
const perimetroCirculo = (2 * Math.PI * radioCirculo).toFixed(2);
const areaCirculo = (Math.PI * radioCirculo**2).toFixed(2);

console.log(`El radio del círculo es: ${radioCirculo} cms.`);
console.log(`El diámetro del círculo es: ${diametroCirculo} cms.`);
console.log(`El perímetro del círculo es: ${perimetroCirculo} cms.`);
console.log(`El área del círculo es: ${areaCirculo} cms cuadrados.`);

console.groupEnd()