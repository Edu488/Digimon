    
    //funciona para iniciar el juego

    function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('Boton-mascota')
    botonMascotaJugador.addEventListener('click',selecionarMastocaJugador)  
    
    }
    //llamar la respuesta de input
    function selecionarMastocaJugador(){
    let inputagumon = document.getElementById('agumon')
    let inputgabumon = document.getElementById('gabumon')
    let inputfloemon = document.getElementById('floemon')
    let inputleomon = document.getElementById('leomon')
    let inputkristalmon = document.getElementById('kristalmon')
    let inputmememon = document.getElementById('mememon')
    let spanMascotaJugador = document.getElementById('mascota-jugador')        
      
    //Seleccion del compañero    
        if (inputagumon.checked){
            spanMascotaJugador.innerHTML ='Agumon'
        }else if (inputgabumon.checked){
            spanMascotaJugador.innerHTML ='Gabumon'
        }else if(inputfloemon.checked){
            spanMascotaJugador.innerHTML ='Floemon'
        }else if(inputleomon.checked){
            spanMascotaJugador.innerHTML ='Leomon'
        }else if(inputkristalmon.checked){
            spanMascotaJugador.innerHTML ='Kristalmon'    
        }else if(inputmememon.checked){
            spanMascotaJugador.innerHTML ='Mememon'
        }else {
            alert('No elejiste ningun Digimon')
        }
}
        window.addEventListener('load', iniciarJuego)