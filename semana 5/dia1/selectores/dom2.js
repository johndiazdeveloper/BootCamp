document.write("hola genteeee");
document.write("hola genteeee xdddddddddddddddddd")



const input= Array.from( document.querySelectorAll("input"))
// contenedor 
const contenedor = document.querySelector("#container-list")
// ul dede js
const ul = document.createElement("ul")
// recorre el input  nodelist

input.map((element)=>{
    const li = document.createElement("li");
    const elementText= document.createTextNode(element.value);
    li.appendChild(elementText)
    //debo agregarlo a mi lista
    ul.appendChild(li);
})

contenedor.appendChild(ul);
console.log(ul)

const  body = document.body;
body.style.backgroundColor="red"
body.style.fontFamily = "Helvetica"
body.style.color = "#fff"