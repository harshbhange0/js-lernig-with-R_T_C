function addInput(num){
    let inputBox = document.getElementById("inputScreen");
    inputBox.value=inputBox.value+num      
}
function calNumber(){
    inputBox=document.getElementById("inputScreen")
    let result=eval(inputBox.value)
    let remainBox =document.getElementById("ansScreen")
    document.getElementById("ansScreen").value= result; 
}

function allClear(){
    document.getElementById("inputScreen").value=""
    document.getElementById("ansScreen").value=""
}
