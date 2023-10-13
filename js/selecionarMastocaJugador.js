 //llamar la respuesta de input
 function selecionarMastocaJugador(){
    let inputagumon = document.getElementById('agumon')
    let inputgabumon = document.getElementById('gabumon')
    let inputfloemon = document.getElementById('floemon')
    let inputleomon = document.getElementById('leomon')
    let inputkristalmon = document.getElementById('kristalmon')
    let inputmememon = document.getElementById('mememon')
        let spandigimonjugador = getElementById('')
      
    //Seleccion del compañero    
        if (inputagumon.checked){
            alert('Selecionaste a Agumon')
        }else if (inputgabumon.checked){
            alert('Selecionast a Gabumon')
        }else if(inputfloemon.checked){
            alert('Selecionast a Floemon')
        }else if(inputleomon.checked){
            alert('Selecionast a Leomon')
        }else if(inputkristalmon.checked){
            alert('Selecionast a Kristalmon')     
        }else if(inputmememon.checked){
            alert('Selecionast a Mememon')
        }else {
            alert('No elejiste ningun Digimon')
        }
}
export default selecionarMastocaJugador