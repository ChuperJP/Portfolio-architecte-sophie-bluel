/********** is connected**********/

/*function isConnected() {
    token = localStorage.getItem("token")
    if (token !== null) {
        return true
    }

    else {
        return false
    }

}*/


function deleteOneProject(getItemId) {
    isConnected()
    if (isConnected() === true) {
        fetch('http://localhost:5678/api/works/' + getItemId, {
            method: 'DELETE',
            headers: {
                accept: "*/*",
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        })
            .then(function (response) {
                if (response.ok) {
                    console.log(response)
                    return response.json()
                }
            })
            .then(function (response) {
                console.log(response)
                /**********filter sur variable projects**********/
                //projects = projects.filter(projet => projet.id !== projet.getItemId)
                projects = projects.filter(function (projet) {
                    return projet.id !== projet.getItemId;
                  })
                  console.log(projects)

                /**********Affiche projets page index actualisé**********/
                afficherProjects()
                /**********afficher projets modal actualisé**********/
                afficherModalProjects()
            })
        /*.catch(function (err) {
            // Affiche une erreur est survenue
            console.log(err)
            //return alert("une erreur est survenue.")
        });*/

    }
}



