    
    import selecionarMastocaJugador from "./selecionarMastocaJugador.js"
    //funciona para iniciar el juego

    function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('Boton-mascota')
    botonMascotaJugador.addEventListener('click',selecionarMastocaJugador)  
    
    }
   
        window.addEventListener('load', iniciarJuego)