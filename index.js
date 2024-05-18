
function verificarNumero(){
    let n = document.getElementById('recebeNumero')
    let r = document.getElementById('resultado')
    if(n.value == 0){
        r.textContent = `O numero é igual a zero`
        return 'O numero é zero'
    }else if(n.value > 0){
        r.textContent = 'O numero é positivo'
    }else{
        r.textContent = 'O numero é negativo'
    }
}