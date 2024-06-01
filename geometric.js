
const main = (()=>{ //patron modular para que sea mas seguro
'use strict' //codigo estricto y limpio 


//segunda forma exportar patron modular traer los id de los botones definidos en variable

const button_cuadrado_area = document.getElementById('button_cuadrado_area'),button_cuadrado_perimetro= document.getElementById('button_cuadrado_perimetro'),
button_triangulo_perimetro=document.getElementById('button_triangulo_perimetro'),button_triangulo_area = document.getElementById('button_triangulo_area'),
button_circulo_area = document.getElementById('button_circulo_area'),button_circulo_perimetro = document.getElementById('button_circulo_perimetro'),
button_circulo_diametro = document.getElementById('button_circulo_diametro');

//defino funciones para calcular

let area_cuadrado = (lado)=> lado * lado;
let perimetro_cuadrado = (lado)=> 4 * lado;

let area_triangulo = (base,altura)=> (base*altura)/2;
let perimetro_triangulo = (lado1,lado2,lado3)=> lado1+lado2+lado3;

let area_circulo = (radio)=> (radio**2)*3.14;
let perimetro_circulo = (radio)=> 2*3.14*radio;
let diametro_circulo = (radio)=> 2*radio;

// defino funciones para extraer y enviar DOM , añado evento listener para ejecutar patron modular

button_cuadrado_area.addEventListener('click',()=>{
    
    let valuec = Number (document.getElementById('cuadrado_text').value);
    // Verifico si el valor es un número válido y no está vacío
    if (!isNaN(valuec) && document.getElementById('cuadrado_text').value !== "") {
        // Variable donde enviamos el mensaje y concatenamos la función con parámetro el valor obtenido
        let result = `El resultado del área del cuadrado es ${area_cuadrado(valuec)} cm²`;
        // Obtenemos el elemento y reemplazamos el texto por la variable result
        document.getElementById('result').innerText = result;
    } else {
        // Mensaje de alerta si el campo está vacío o el valor no es válido
        alert('El campo está vacío o el valor no es un número válido');
    }
})


button_cuadrado_perimetro.addEventListener('click', ()=>{
    let valuec = Number (document.getElementById('cuadrado_text').value);

    const result = `El resultado del perimetro del cuadrado es ${perimetro_cuadrado(valuec)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
})


button_triangulo_area.addEventListener('click', ()=>{
    let valuebase = Number (document.getElementById('triangulo_areab').value);
    let valueht = Number (document.getElementById('triangulo_areah').value);

    const result = `El resultado del area del triangulo es ${area_triangulo(valuebase,valueht)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
})

button_triangulo_perimetro.addEventListener('click', ()=>{
    let value1 = Number (document.getElementById('triangulo_lado1').value);
    let value2 = Number (document.getElementById('triangulo_lado2').value);
    let value3 = Number (document.getElementById('triangulo_lado3').value);

    const result = `El resultado del perimetro del triangulo es ${perimetro_triangulo(value1,value2,value3)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
})

button_circulo_area.addEventListener('click', ()=>{
    let valuec = Number (document.getElementById('circulo_text').value);

    const result = `El resultado del area del circulo es ${area_circulo(valuec)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
})


button_circulo_perimetro.addEventListener('click', ()=>{
    let valuec = Number (document.getElementById('circulo_text').value);

    const result = `El resultado del perimetro del circulo es ${perimetro_circulo(valuec)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
}
)

button_circulo_diametro.addEventListener('click', ()=>{
    let valuec = Number (document.getElementById('circulo_text').value);

    const result = `El resultado del perimetro del circulo es ${diametro_circulo(valuec)} cm`; // varible donde enviaremos el mensaje y concatenamos la funcion con parametro el valor obtenido
    document.getElementById('result').innerText =result; // obtenemos el elemento y remplazamos el texto por la variable result
})

// //defino el objecto con formulas que van a poder utilizar y exportar patron modular 1 forma
// return {cac: calcular_cuadradoarea, cpc :calcular_perimetro ,cat:calcular_area_triangulo,cpt:calcular_perimetro_triangulo,cacir:calcular_area_circulo,capec:calcular_perimetro_circulo,
//     cadiac:calcular_diametro_circulo
//  }

})();













