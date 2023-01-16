
async function deleteOneProject(getItemId) {

    if (isConnected() === true) {
        await fetch('http://localhost:5678/api/works/' + getItemId, {
            method: 'DELETE',
            headers: {
                accept: "*/*",
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        })
        
        console.log(Number(getItemId))
        projects = projects.filter(function (projet) {
            return projet.id !== Number(getItemId);
        })
        
        afficherProjects()
        afficherModalProjects()

    }
    
}




