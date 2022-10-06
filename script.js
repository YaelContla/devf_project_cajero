
// Varriables
const form = document.querySelector('#form-send');
const btnSignIn = document.querySelector('#sign_in');
const btnClose = document.querySelector('#off');

const eRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

// Varriables para form
const user = document.querySelector('#inputEmail');
const pswd = document.querySelector('#inputPassword');

// Iniciar sesion
form.addEventListener('submit', iniciarSesion);

 

// La funcion que ejecuta el DOM
eventListeners();

function eventListeners(){
    // Cuando la app comienza
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario //Blur() nos ayuda para validar el form cuando salgamos del input
    user.addEventListener('blur', validarFormulario);
    pswd.addEventListener('blur', validarFormulario);

   // Cerrar Sesion
    btnClose.addEventListener('click', cerrarSesion);

    
}

// Funciones
// Inicializa el boton deshabilitado
function iniciarApp() {
    btnSignIn.disabled = true;
    // Cerrar Sesion
    
}


// Validar formulario
function validarFormulario(e){


    if(e.target.value.length > 0) {
        // Elimina los errores
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }
        // console.log('si hay algo');
        e.target.classList.remove('border-bottom', 'border-danger');
        e.target.classList.add('border-bottom', 'border-success');
    } else {
        e.target.classList.remove('border-bottom', 'border-success');
        e.target.classList.add('border-bottom', 'border-danger');
        
        mostrarError('Todos los campos son obligatorios');
    }
  
    if(e.target.type === 'email') {


        if( eRegular.test(e.target.value) ){
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
            // console.log('si hay algo');
            e.target.classList.remove('border-bottom', 'border-danger');
            e.target.classList.add('border-bottom', 'border-success');
    
        } else {
            e.target.classList.remove('border-bottom', 'border-success');
            e.target.classList.add('border-bottom', 'border-danger');

            mostrarError('Email no válido');
        }

    }

    // Recorre el arreglo y compara para poder iniciar sesión
    cuentas.map(cuenta => {
        const {email, password} = cuenta;


        if(eRegular.test(user.value) && pswd.value !== ''){
            if (email === user.value && password === pswd.value)
            { 
                localStorage.setItem("user", email);

                btnSignIn.disabled = false;
                e.target.classList.remove('border-bottom', 'border-danger');
                e.target.classList.add('border-bottom', 'border-success');
            } else {
                e.target.classList.remove('border-bottom', 'border-success');
                e.target.classList.remove('border-bottom', 'border-danger');
                // mostrarError('Usuario y/o contraseña incorracta');
            
        }
    }

    });
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border-bottom', 'border-danger', 'bg-danger', 'text-white','p-3', 'mt-4', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    // Se ocupa queryselectorAll porque te regresa una colección de elemento y se puede ocupar el .length
    if (errores.length === 0) {

        form.appendChild(mensajeError);
    }
}



// Iniciar sesion con el boton
function iniciarSesion(e) {
    e.preventDefault();
       
        // Mostrar Snipper
        const spinner = document.querySelector('#spinner');
        spinner.style.display = 'flex'

        // Despues de 3 segundos ocultar el spinner y cambiar de pantalla
        setTimeout(() => {
            spinner.style.display = 'none';
            window.location='/opciones.html';
        }, 3000);
}



// Cerrar sesión
function cerrarSesion(){
    localStorage.removeItem('user');
    localStorage.clear()
    window.location='/index.html';
}




