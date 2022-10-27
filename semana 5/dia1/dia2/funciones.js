
//una funcione es un conjunto de soluciones o ejecuciones  paa poder realizar tareas

//funciones expresiva

function nombreDeLaFuncion(){
//una vez declarada mi funcion todo el codigo que hagmos 
//dentro de este solo se va ejecuatar cunada la llame..

console.log("estudiando funciones ")
}

nombreDeLaFuncion()

//una fucion es creada para poder reautilizar codigo 
//una de las misiones de la funcio es poder hacer un trabajo repetitivo 


function sumar (numero1 ,numero2){
    //orimero voy aconvertirlos paremtro a numeros  
    const suma = numero1 + numero2
console.log("es el resultado" , suma)
}
sumar(40,20)

// quw cosa es return 
//return es la palabra clave la que se encra de retonanros un valor 

//funcione flecha la suma 
const suma2 =(a,b,c,d,e)=>{
     return(a+b+c+d+e)

}
 console.log("otra forma",suma2(60,30,10,10,10))


// recapitular

//tipo de datos 

let nombre = "maria";// string
let age = 34; //number
let talla = 1.76 // numer float 
let boll = true // boleano
let indefinido ;
let nulo = null;
let simbolo = Symbol('zcd');
let objetc = {};

console.log(nombre,typeof (nombre))
console.log(age,typeof (age))
console.log(boll,typeof (boll))

// cambiar tipo de datos

// console.log(age,typeof toString(age))
// console.log(n
//     ombre,typeof  parseInt(nombre))
// console.log(talla,typeof parseFloat(talla))



//tipos de funciones 
//funcion expresiva 
function suma3 (a,b){
    return a+b
}

//funciona anonima

let restar = function(x,y){
    return x-y
}

// funciones flecha 

let multiplicar =(x,y)=>{
 return x * y
}

console.log("funcion expresiva",suma3(10,10))
console.log("funcion anonima",restar(10,10))
console.log("funcion flecha",multiplicar(10,10))