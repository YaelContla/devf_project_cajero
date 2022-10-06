
// Variables/Selectores
const formularioRetirar = document.querySelector('#retirar-saldo');
const formularioAgregar = document.querySelector('#agregar-saldo');
const boxSaldos = document.querySelector('#saldo');
const labelSaldo = document.querySelector('#u1');


// Eventos



eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
    
}

function iniciarApp() {
    mostrarSaldo(cuentas);
}

function mostrarSaldo(){

    

    cuentas.map(cuenta => {
        const {id, saldo, email} = cuenta;

        const usuario = localStorage.getItem('user');

        // console.log(usuario);
        // console.log(id);
        // console.log(saldo);

        if ( email === usuario) {
            labelSaldo.innerText = saldo;
        }

        
    
    });
}