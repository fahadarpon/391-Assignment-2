document.getElementById("Go").onclick = converter;
// convertion function 
function converter(){
    let onepound =  0.4536;
    let onekilogram =  2.2046;
    let userinput = document.getElementById("givenumber").value;
    let resultstorer;

    let usersintendedconversion = document.getElementById("styleofconversion");
    let temp = usersintendedconversion.value;

    if(temp==1){
        resultstorer = userinput*onepound;
        document.getElementById("unit").innerHTML = resultstorer+" kilogram";
    }
    else{
        resultstorer = userinput*onekilogram;
        document.getElementById("unit").innerHTML = resultstorer+" pound";
    }
    
}