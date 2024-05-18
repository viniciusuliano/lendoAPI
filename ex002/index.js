
// PERCORRE ARRAY E PROCURA NUMERO QUE CONTEM
function percorreVerifica(array, p2){
    let busca = array.find((item)=>{
        if(item == p2){
            console.log('ACHOU')
        }else if(item != p2){
            console.log('NÃO ACHOU')
        }
        })
}



percorreVerifica([1,6,7,10], 10)