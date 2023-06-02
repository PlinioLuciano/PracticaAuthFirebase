import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"; // uso el mismo link para llamar al metodo nuevo {''} el cual al darle uso va esperar 3 parametros
import { auth } from './firebase.js'  // Importo archivo y traigo metodo auth.

const signupForm = document.querySelector('#signup-form'); //Llamo al formulario de sign up y lo guardo en una cosntante.

signupForm.addEventListener('submit', async (e) => {
e.preventDefault() // prevengo un refresh en el sitio

const email = signupForm['signup-email'].value
const password = signupForm['signup-password'].value

console.log(email, password)

try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password) 
    console.log(userCredentials)
} catch (error) {
    console.log(error)
}

// min 33:44 https://www.youtube.com/watch?v=Djh_eVj0D2w

//Creo un try/catch, paso los parametros que voy a autenticar y los va a enviar a firebase. Por otro lado para que funcione el "await" en el evento de espera en linea 6, hay que agregar un "async" caso contrario si no se usa async hay que crear un then luego de los parametros a autenticar. Todo esto lo guardo en una constante. 


})



