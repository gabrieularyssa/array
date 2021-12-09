let numbersCresc = [];
let array = []
let primeiro 
let segundo 
let terceiro 
let quarto 

function inverter() {
    primeiro = parseInt(document.getElementById("one").value);
    segundo = parseInt(document.getElementById("two").value);
    terceiro = parseInt(document.getElementById("three").value);
    quarto = parseInt(document.getElementById("four").value);
        array = [quarto, terceiro, segundo, primeiro];
        document.getElementById("exibir").innerHTML = (array);
}
function crescente() {

    inverter ()

    for(let i = 0; i < 16; i++){
        if (array[0]>array[1] && array[0]>array[2] && array[0]>array[3]){
            array.push(array[0])
           array[0] =" "
        }
        else  if (array[1]>array[0] && array[1]>array[2] && array[1]>array[3]){
            array.push(array[1])
           array[1] =" "
        }
        else  if (array[2]>array[0] && array[2]>array[1] && array[2]>array[3]){
            array.push(array[2])
           array [2] =" "
        }
        else  if (array[3]>array[0] && array[3]>array[1] && array[3]>array[2]){
            array.push(array[3])
           array [3] =" "
        }
        else {
            i++
        }
       
    }
    array.splice(0,4);
    array = [array[3], array[2], array[1], array[0]]
    document.getElementById("exibir").innerHTML = (array);
}
  