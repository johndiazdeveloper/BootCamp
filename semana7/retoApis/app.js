// primero atrapar el elem,entro donde se comonzara mostrar

//atrapamos el  div en html 
const pokemonContainer = document.querySelector("#row-pokemons");
//atrapar lo datos para el modal
const pokemonName = document.querySelector("#pokemon-name");
const pokemomImg = document.querySelector("#pokemon-img")


//vamois a crear una funcion para obtner los Datos 

const obtenerPokemones = async ()=>{
    try{  
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    console.log(data.results);  
    setPokemonsInView(data.results)
  }catch(error){
    console.log(error)    
  }
}



const setPokemonsInView = (results)=>{
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

    results.map(async (results,index)=>{

      const bgColor = await getColorPokemon(index +1);
      const html =`
      <div class="col-md-3 mt-3">
    <div class="card" style ="background-color : ${bgColor};">
      <img 
      class = "card-img-top mt-2"
      width ="100"
      height ="100"
      src='${imgUrl}${index + 1}.svg'> 
      <div class = "card-body text-center">
      <h6 class = "text-title text-white">
      N.-${index + 1}</h6>
      <h4 class = "text-title">${results.name}</h4>
      </div> 
      <button class="btn btn-danger" onclick='obtenerDetailPokemon("${results.url}")' data-bs-toggle ='modal' data-bs-target='#modalPokemon'>ver detalle</button>
      </div>
      </div>  `;


      pokemonContainer.innerHTML+=html
    });
};

obtenerPokemones()



const obtenerDetailPokemon = async(url)=>{
  const response = await fetch(url);
  const data = await response.json();
  console.log("detalle", data);
  pokemonName.innerHTML = data.name;
  pokemomImg.src = data.sprites.other.dream_world.front_default;

}

const color ={
    red: "rgba(255, 48, 50, 0.7)",
    green: "rgba(83, 180, 50, 0.7)",
    blue: "rgba(113, 104, 226, 0.7)",
    brown: "rgba(113, 104, 226, 0.7)",
    purple: "rgba(113, 104, 226, 0.7)",
    pink: "rgba(255, 48, 50, 0.7)",
    yellow: "rgba(229, 216, 0, 0.6)",
  };

  const getColorPokemon = async (id) =>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    const data = await response.json();
 
    console.log(data.color.name);
    return color [data.color.name];

  }