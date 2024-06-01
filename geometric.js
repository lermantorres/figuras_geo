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
    let valuec = Number (document.getElementById('cuadrado_text').value);

    const result = `El resultado del perimetro del cuadrado es ${perimetro_cuadrado(valuec)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
}


function calcular_area_triangulo (){
    let valuebase = Number (document.getElementById('triangulo_areab').value);
    let valueht = Number (document.getElementById('triangulo_areah').value);

    const result = `El resultado del area del triangulo es ${area_triangulo(valuebase,valueht)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
}

function calcular_perimetro_triangulo (){
    let value1 = Number (document.getElementById('triangulo_lado1').value);
    let value2 = Number (document.getElementById('triangulo_lado2').value);
    let value3 = Number (document.getElementById('triangulo_lado3').value);

    const result = `El resultado del perimetro del triangulo es ${perimetro_triangulo(value1,value2,value3)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
}

function calcular_area_circulo (){
    let valuec = Number (document.getElementById('circulo_text').value);

    const result = `El resultado del area del circulo es ${area_circulo(valuec)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
}


function calcular_perimetro_circulo (){
    let valuec = Number (document.getElementById('circulo_text').value);

    const result = `El resultado del perimetro del circulo es ${perimetro_circulo(valuec)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
}


function calcular_diametro_circulo (){
    let valuec = Number (document.getElementById('circulo_text').value);

    const result = `El resultado del perimetro del circulo es ${diametro_circulo(valuec)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
}









