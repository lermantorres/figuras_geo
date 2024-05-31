//defino funciones para calcular

let area_cuadrado = (lado)=> lado * lado;
let perimetro_cuadrado = (lado)=> 4 * lado;

let area_triangulo = (base,altura)=> (base*altura)/2;
let perimetro_triangulo = (lado1,lado2,lado3)=> lado1+lado2+lado3;

let area_circulo = (radio)=> (radio**2)*3.14;
let perimetro_circulo = (radio)=> 2*3.14*radio;
let diametro_circulo = (radio)=> 2*radio;

// defino funciones para extraer y enviar DOM

function calcular_cuadradoarea(){
    let inputSide = document.getElementById('cuadrado_text'); //obtengo el elemento que necesito
    let valuec = Number(inputSide.value); //obtengo el valor dentro del elemento y lo cambio a numero

    const result = `El resultado del area del cuadrado es ${area_cuadrado(valuec)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
}


function calcular_perimetro (){
    let valuec = Number (document.getElementById('cuadrado_text').value)

    const result = `El resultado del perimetro del cuadrado es ${perimetro_cuadrado(valuec)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
}








