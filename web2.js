document.getElementById("Go").onclick = convert;
// convertion function 
function convert(){
    let onepound =  0.4536;
    let onekilogram =  2.2046;
    let userinput = document.getElementById("givenumber").value;
    let resultstorer;

    let usersintendedconversion = document.getElementById("styleofconversion");
    let temp = usersintendedconversion.value;

    if(temp==1){
        resultstorer = userinput*onepound;
        document.getElementById("unit").innerHTML = resultstorer+" killogram";
    }else{
        resultstorer = userinput*onekilogram;
        document.getElementById("unit").innerHTML = resultstorer+" pounds";
    }
    
}