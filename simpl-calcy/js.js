function calculateSum() {
    const a = document.getElementById("val1").value;
    const b = document.getElementById("val2").value;
    const operator = document.getElementById("operator").value;
    let sum ;

switch (operator) {
     case "+":
        sum = parseInt(a) + parseInt(b);
     break;
    case "-":
        sum = parseInt(a) - parseInt(b);
    break;
    case "*":
        sum = parseInt(a) * parseInt(b);
    break;
    case "/":
        sum = parseInt(a) / parseInt(b);
    break;
    default:
        sum = "Invalid operator";
    }
document.getElementById("result").innerHTML="SUM OF "+" "+a+" "+operator+" "+" "+b+" = "+sum ;
    console.log(sum)
}

function reset(){
    document.getElementById("result").innerHTML="SUM OF "
    const a = document.getElementById("val1").value ="";
    const b = document.getElementById("val2").value="";
    const operator = document.getElementById("operator").value="";
}