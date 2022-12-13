

const promesa = new Promise((resolve,reject)=>{
//vamos a emular un tiempo de espera
    setTimeout(()=>{
//esat funcion va esperar 3 segundo ára poder retornar el resoolve
        resolve("aca demora en llegar a console")
    },2000);
});

//como ejecutamos la promesa
async function getDataFromPromesa(){
    const respuesta = await promesa;
    console.log(respuesta);
}

getDataFromPromesa()
//exisate otra forma de leer promesas esta forma existe del asyn await 
//.then()=>entonces -luego de 
//.then  un callback 
//callback es una funcion que ejecuta algo en base a un resultado 

promesa.then((respuesta)=>{
    //cunadio acbes der ejecuitar la promesa obtener el valor y guaradloe n respuesta 
console.log("then", respuesta)

})

//vamios a creae una promesa con errores...
const promesasConError =(validacion)=>{
    return new Promise((resolve,reject)=>{
        if (validacion){
            resolve("la validacion esta ok!")
        }else {
            //new error es una clase de js la cualnos permite retorna con mesnsaje
            reject(new Error("Error ennla validacion"))
        }
    });
}

// veamos como poder validar un error usando .then()

promesasConError()
.then((respuesta)=>{
    console.log(respuesta)
    //para poder detectar un erro usamos .catch()
    //si algfo esta mal autoamticamente entra al catch()
})
.catch((error)=>{
    console.log(error.message)
})

//vamoa a validaR UN ERRO USANDO ASYNC AWAIT

const validacionAsync = async()=>{
    //con try catch 
    try{
        //aca va intentar obtner el resultado  de la péticion
        const respuesta = await promesasConError();
        console.log("valuidacionesAsync", respuesta)
    }catch(error){
        //si dtecta un erro automcatricam,emte entra al catch
        console.log("validacionAsync", error.message)
    }
};

validacionAsync()

//ejemplo real 

const getUserGithub = async ()=>{
    try{
       const response = await fetch("https://api.github.com/users/cvxcvcvcv") ;
       const data = await response.json();
       return data; 
    }catch(error){
        
        console.log(error.message)
    }
};
getUserGithub()

//veamos un poco de los que el statuts code ,
//normalmen estos codigo son respuesta de una peticion fallida 

//200 ,500,401,403,404,201,512
//si una peticvion n0o devuelve un status que sea 200 201 
//que la erespuesta es ok 
//200 = ok
//201 = ok y ademas significa que algo ha sido creado 

// si la url response  un 500 404 512 
// hay un error
//404 = es el eroror que muestra cuandono encuentra la url , es devir no existe
//500 = es ele error que retorna cunado hay un preblema en serviudor 
//512 = es un eror de espacio en el servidor 

//get  = obetner datos 
//post = enviar /crear datos 
//put = actualizar datos
//delete = borrado