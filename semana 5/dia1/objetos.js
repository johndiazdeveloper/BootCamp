// que es un objeto  es una entidad independinete , el cual tiene prpiedas y atributos .
//  esta compuesto por un (keys) y un value


//el objeto de un carro 

const carro ={
    color: "azul",
    motor: 1.6,
    modelo: "mustang",
    marca:"changan",
    nuevo: false,
};

console.log("es un objeto", carro)

//objet persona 


const persona={
    edad:34,
    nombre: "panfilo",
    sexo:"masculino",
    talla: 1.78,
    estadoCivil: "cazado",
    mayorEdad : true,
    donacionOrganos: true,


}

//como acceder a un atributo

console.log("nombre" ,persona.estadoCivil)
console.log("persona", persona)

// como sustituir
 persona.nombre = "guillermo";
 persona.talla = 2.00;

// agregar un elemento  = key y el value 

persona["profesion"] = "ingeniebrio"
persona["bailarin"]= true;
persona.nacionalidad= "ucraniano";