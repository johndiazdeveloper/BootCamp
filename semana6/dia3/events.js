
const btnPrueba = document.querySelector('#btn-prueba')
btnPrueba.onclick = function(event){
    console.log("click desde el boton")
    console.log(event)
    Swal.fire("hola mundo")
}
const btnPregunta = document.querySelector('#btn-pregunta')

btnPregunta.onclick = function(){
    Swal.fire("Alguna pregunta ", "Aca eñ texto de la pregunta en cuestion")
}

const btnError= document.querySelector('#btn-error')

function showAlert(icon,title,text){
    Swal.fire({
        icon,
        title,
        text,
        footer: "<a href ='https://google.com'> mas info"
    })
}

btnError.onclick = function(){
    showAlert("error" , "hubo un error", "email or password erroneos");
};

const btnWarning = document.querySelector("#btn-warning")

btnWarning.onclick = function(){
    showAlert("warning","ALERTA DE PELIGRO","El peligro se ecerca")
}

const btnAlertBotones= document.querySelector("#btn-alert-botones")

btnAlertBotones.onclick = function(){
    Swal.fire({    
        title: "Alerta",
        text: "Texto de Alerta",
        showDenyButton :true,
        showCancelButton: true,
        confirmButtonText : "guardar",
        denyButtonText: "negar"
    }).then((resultado)=>{
        console.log("resultado",resultado);
        if(resultado.isConfirmed){
            showAlert("success","conrirmado", "se confirmo la operacon");
            console.log("marco la confirmacion")
        }
        if(resultado.isDenied){
            showAlert("error","negado", "se nego la operacion");
            console.log("nego la operacion")
        }
       

    })
}

 const btnAlertaImagen =document.querySelector("#btn-alerta-imagen")
const urlMarvel = "#"
 btnAlertaImagen.onclick = function(){
    Swal.fire({
        title: "Peeps",
        text: "alerta con imagen",
        imageUrl: urlMarvel,
        imageWidth : 200,
        iamgeHight : 200,

    })
 }

 const btnAlertaCustom= document.querySelector("#btn-alerta-custom")

 btnAlertaCustom.onclick = function(){
    Swal.fire({
        title: "cutom Alert",
        text : "Alerta personalizada",
        background : `url(${urlMarvel})`,
        color: "#fff",
        backdrop:
        `rgba(0,0,0,0.3)
        url(https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif) left top  no-repeat`,
    })
 }

 const btnAlertinputs = document.querySelector("#btn-alerta-inputs")

 btnAlertinputs.onclick = function(){
    Swal.fire({
        title: "input para email",
        input:"email",
        inputLabel : "ingrese su correo",
        inputPlaceholder: "el correo debe ser valido",    
    }).then((resultado)=>{
        //obnetgo el resultado de lo quye eescribo el usuario
        console.log(resultado.value)
    })
 }

 const paises = document.querySelector("#select-opciones")
 //onchange sirve para detectar si hay un cambio enmi elemtno

 paises.onchange = function(event){
    //de evento quiero captura el value y options
    const{value,options} = event.target; 

    console.log (value)
const index = options.selectedIndex;
console.log("index",index)
console.log("texto",options[index].text);

}

const usuario ={
    nombre: "pepe",
    apellido :"zapata",
    edad: 30,
    direccion :{
        calle: "calle siempre viva",
        numero: 123,
        ciudad: "springfield"
    }
}

//nosotsot podemos destructura 

const{nombre, apellido , edad ,direccion}= usuario;

console.log(apellido);
