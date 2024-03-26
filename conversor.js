const valor = document.querySelector('#valor');
const pesos = document.querySelector('#moneda1')
const euros = document.querySelector('#moneda2')
const conversion = document.querySelector('#conversion');
const convertir = document.querySelector('#btn');
const convertir2 = document.querySelector('#btn2');
const f = document.querySelector('#farengeigh');
const g = document.querySelector('#grados');
const conversion2 = document.querySelector('#conversionTemp');

convertir.addEventListener('click', function () {
    if (pesos.checked) {
        const nombre = valor.value < 1 ? 'dolar' : 'dolares'
        conversion.innerHTML = `El valor de ${valor.value} ${nombre} a pesos es de ${valor.value * 856.25} pesos`;
    }
    if (euros.checked) {
        const nombre = valor.value < 1 ? 'dolar' : 'dolares'
        conversion.innerHTML = `El valor de ${valor.value} ${nombre} a Euros es de ${(valor.value * 0.92).toFixed(2)} Euros`;
    }
})

convertir2.addEventListener('click', function () {
    if (g.checked) {
        conversion2.innerHTML = `La temperatura de ${valor2.value} Fahrenheit pasada a grados es de ${(valor2.value - 32) * 5 / 9} Cº`
    }
    if (f.checked) {
        conversion2.innerHTML = `La temperatura de ${valor2.value} grados pasada a Fahrenheit es de ${(valor2.value * 9 / 5)+32} Fº`
    }
})




