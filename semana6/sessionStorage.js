
const crear = document.querySelector("#crear-session")
const obtener = document.querySelector("#obtener-session")
const eliminar = document.querySelector("#eliminar-session")

// primer boton 
crear.onclick = function(){
    // session 
  
    sessionStorage.setItem(
        "variable_1",
        "mi primera variable en session storage"
            )
}

// segundo boton 
obtener.onclick = function(){
    const variable = sessionStorage.getItem("variable_1");
    console.log(variable)
}

//tercer boton 
eliminar.onclick = function(){
    sessionStorage.removeItem("variable_1")
}
