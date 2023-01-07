const addImage = document.querySelector(".modal_add_form #add_project_image")
const addTitle = document.querySelector(".modal_add_form #add_project_title")
const addCategorie = document.querySelector(".modal_add_form #add_project_cat")
const addProjectValid = document.querySelector(".modal_add_form input[type='submit']")

const modal_add_form = document.querySelector(".modal_add_form")



addProjectValid.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append("image", addImage.files[0]);
    formData.append("title", addTitle.value);
    formData.append("category", addCategorie.value);
    console.log(formData)

    //const searchParams = new URLSearchParams(formData)
   // console.log(searchParams)

    fetch("http://localhost:5678/api/works", {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("token"),
            'Content-Type': 'multipart/form-data',
        },
        body: formData
        
        
        /*JSON.stringify({
            "image": formData,
            "title": addTitle.value,
            "category": addCategorie.value,
        }),*/
    })
        .then(function (response) {
            if (response.ok) {
                console.log(response)
                return response.json();
            }
        })
        .then(function (data) {
            //console.log(data)

            /**********Affiche projets page index actualisé**********/
            afficherProjects()
            /**********afficher projets modal actualisé**********/
            afficherModalProjects()

    })
    /*.catch(function(err) {
      // Affiche une erreur est survenue
      return alert("une erreur est survenue.")
    });*/

})


/**********affichage image miniature dans l'input d'upload**********/

addImage.addEventListener("change", (e) => {
    afficherInputImage(e)
    addProjectValid.style.background = "#1D6154"
})


addCategorie.addEventListener("change", (e) => {
    console.log(addCategorie.value)
})

function afficherInputImage(e) {
    const divSvg = document.querySelector(".modal_add_form .input_add_photo")

    divSvg.innerHTML = ''

    let image = document.createElement("img")
    image.setAttribute("src", URL.createObjectURL(e.target.files[0]))
    image.setAttribute("class", "uploadedImage")
    image.setAttribute("crossorigin", "anonymous")
    divSvg.appendChild(image)
}

/**********changement de couleur du bouton add image submit**********/


//changeColorInput()



function changeColorInput() {

    if (addImage.files === null && addTitle.value === undefined) {
        addProjectValid.style.background = "#A7A7A7"
    }
    else {
        addProjectValid.style.background = "#1D6154"
    }

}
//(addImage.value === null || addImage.value === "")
/*|| (addTitle.value === null) || (addCategorie.value === null)) */
