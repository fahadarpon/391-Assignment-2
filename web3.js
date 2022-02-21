
// for task 3 
// all the result finder function 

function calculator(){
    let inputaker = document.getElementById("forinput").value;
    const spliter = inputaker.split(",");
    const inputstorer = [];
    let sum =0;

    for(let i=0; i<spliter.length; i++){
        let inputaker = spliter[i]
        inputstorer[i]=parseInt(inputaker);
    }
    // for sum result 
    for(let i=0; i<inputstorer.length; i++){
        sum = sum+inputstorer[i];
    }
    document.getElementById("sum").innerText = sum;
    

    // for minimum result 
    let minimum = Math.min(...inputstorer);
    document.getElementById("minimum").innerHTML = minimum;

    // for maximum result 
    let maximum = Math.max(...inputstorer);
    document.getElementById("maximum").innerHTML = maximum;

    // for average result
    let average = sum/inputstorer.length;
    document.getElementById("average").innerHTML = average;

    // for reverse result
    let temporary = inputstorer;
    let reverse = temporary.reverse();
    document.getElementById("reverse").innerHTML = reverse;

}