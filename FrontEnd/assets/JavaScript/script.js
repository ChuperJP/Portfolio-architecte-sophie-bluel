/////////////RECUPERATION DES PROJETS/////////////
let projects = []
let projectsFiltered = []

const projetsApi = fetch('http://localhost:5678/api/works')
.then(function(response){
    if (response.ok) {
      console.log(response)
    return response.json(); }
  })
  .then(function(data){
    console.log(data)
    afficherProjects(data)
    projects = data
    projectsFiltered = data
  })
  .catch(function(err) {
    // Affiche une erreur est survenue
    return alert("une erreur est survenue.")
  });


/////////////AFFICHAGE DES PROJETS/////////////
const gallery = document.querySelector(".gallery")
const figure = document.getElementsByTagName("figure")


function afficherProjects(projects) {
  for (let project of projects) {
    let figure = document.createElement("figure");
    gallery.appendChild(figure)
    
    let image = document.createElement("img")
    image.setAttribute("src", project.imageUrl)
    image.setAttribute("alt", project.title)
    image.setAttribute("crossorigin", "anonymous")
    figure.appendChild(image)
    
    let figcap = document.createElement("figcaption");
    figcap.innerText = project.title
    figure.appendChild(figcap)

  }
}

/////////////MENU DE SELECTION DES PROJETS/////////////

const boutonTous = document.querySelector(".btn_Tous");
const boutonObjets = document.querySelector(".btn_Objets");
const boutonAppartements = document.querySelector(".btn_Appartements")
const boutonHotelsRestaurants = document.querySelector(".btn_Hotels-restaurants")

const btn_filters = document.querySelectorAll(".btn_filter")



for (const btn of btn_filters) {
  btn.addEventListener("click", () => {
  const getValue = btn.getAttribute("value");

 if (getValue === "Tous"){
  return  result = projectsFiltered
}
else {
   result = projectsFiltered.filter(function(projet) {  
    
    return projet.category.name === getValue;
  })
}

console.log(result)
    })


}



/*const result = projectsFiltered.filter(function(projet) {   
  return projet.category.name === getValue;
})*/


