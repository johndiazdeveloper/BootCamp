//variables 
//let = algo que podria cambiar
//const = elemento constantes 
//var = conflicto - manera global 

let numero1 = 20;
let numero2 =300;
 let suma = 0;
 

suma= numero1 + numero2;
resta= numero1 - numero2;

// console.log("este es el resultado", suma)
// console.log("este es el resultado", resta)
// console.error("este es el resultado", suma)
// console.warn("este es el resultado", suma)


// alert  = es una alerta en el avegador
//console log = una funcion del navegador imprime en consola
//concatenacion = junta cadea texto - junata number con un string

// vamos hacer una calculadora  con js 
// prompt : es una ventana emergnet que nos pide un valor 
//y ese valor se guarda en una variable

// const valor1 = //prompt("ingresa el valor 1");
// const valor2 = //prompt("ingresa el valor 2");

//necesitamos ingresa la operacion para el preceso
//parsear 

 const operacion ="+" // prompt("igresa una operacion + ,- ,*,/")

if(operacion === "+"){
    resultadoCalculadora = +valor1 + +valor2;
    console.log("resultado" , resultadoCalculadora);    
}else if(operacion ==="-"){
    resultadoCalculadora = +valor1 - +valor2;
    console.log("resultado" , resultadoCalculadora);
}else if(operacion ==="*"){
    resultadoCalculadora = +valor1 * +valor2;
    console.log("resultado" , resultadoCalculadora);
}