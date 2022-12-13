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

// acceder atributo

console.log("nombre" ,persona.estadoCivil)
console.log("persona", persona)

//  sustituir
 persona.nombre = "guillermo";
 persona.talla = 2.00;

// agregar un elemento 

persona["profesion"] = "ingeniebrio"
persona["bailarin"]= true;
persona.nacionalidad= "ucraniano";