// redirige vers la page index
//windows.location.href = "http://127.0.0.1:5500/FrontEnd/index.html"*

const email = document.querySelector("form input[type='email']")
const password = document.querySelector("form input[type='password']")
const connexion = document.querySelector("form input[type='submit']")


connexion.addEventListener("submit", () => {
    console.log(email.value)
    console.log(password.value)

    fetch('http://localhost:5678/api/users/login',{
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value,
        }),
    })
    .then(function(response){
        if (response.ok) {
          console.log(response)
        return response.json(); }
      })
      .then(function(result){
        console.log(result)
  
      })
      /*.catch(function(err) {
        // Affiche une erreur est survenue
        return alert("une erreur est survenue.")
      });*/
    
})



/*fetch('http://localhost:5678/api/users/login',{
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: 'Hello world'})
})*/




//// bouton modifier/////////

//<p><i class="fa-regular fa-pen-to-square"></i> Modifier </p>