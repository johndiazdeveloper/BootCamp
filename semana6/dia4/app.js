
const imgProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUserName = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubLocation = document.querySelector("#github-location");
const githubTwitter = document.querySelector("#github-twitter");
const githubUrl = document.querySelector("#github-url");
const githubBuild = document.querySelector("#github-build");

const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search")
githubActionSearch.onclick =()=>{
    const username = githubInputSearch.value;
    githubInputSearch.value = "";
    if(username ===""){
        Swal.fire({
            title: "error",
            text: "debes llenar el campo usario",
            icon:"error"        
        });
        return;
    }
    
    obtenerDatosgithub(username);
};


githubInputSearch.addEventListener("keyup", function(event){
    if(event.key ==="Enter"){
        obtenerDatosgithub(event.target.value)
    }a
})



const obtenerDatosgithub = async(username = "johndiazdeveloper")=>{


    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();

    if(data.message === "Not Found"){
        Swal.fire({
            title:"Error",
            text: "No se econtro el usuario",
            icon: "error",
        });
        return;
    }

    setDataUser(data)
};

const formatDate = (fecha)=>{
    let date = new Date(fecha);
    return date.toISOString().split("T")[0];
}


const setDataUser = (data)=>{
    imgProfile.src = data.avatar_url;
    githubName.innerHTML = data.name;
    githubBio.innerHTML = data.bio;
    githubUserName.innerHTML=`@${data.login}`;
    githubJoined.innerHTML= formatDate(data.created_at);
    githubRepos.innerHTML = data.public_repos;
    githubFollowers.innerHTML = data.followers;
    githubFollowing.innerHTML = data.following;
    githubLocation.innerHTML= data.company;
    githubTwitter.innerHTML = data.twitter_usernname; 
    githubUrl.innerHTML = data.html_url ;
    githubBuild.innerHTML =`@${data.login}`

}

obtenerDatosgithub()