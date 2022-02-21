// // task 4 js starts 
 // clear it
 function clearit(){
    document.getElementById("text-field-input").value = "";
}

// capitalize
function capitalize(){
    let inputtaker2 = document.getElementById("text-field-input").value;
    inputtaker2 = inputtaker2.toUpperCase();
    document.getElementById("text-field-input").value = inputtaker2;
}

// sort
function sort(){
    let inputtaker1 = document.getElementById("text-field-input").value;
    let arrayone = inputtaker1.split("\n");
    arrayone = arrayone.sort();
    let inputtaker2 = "";
    for(i=0; i<arrayone.length; i++){
        inputtaker2 =inputtaker2+arrayone[i]+"\n";
    }
    document.getElementById("text-field-input").value = inputtaker2;
}

// Reverse
function reverse(){
    let inputtaker1 = document.getElementById("text-field-input").value;
    let inputtaker2 = "";
    let arrayone = inputtaker1.split("\n");
    for(i=0; i<arrayone.length; i++){
        let arraytwo = arrayone[i].split(" ");
        arraytwo = arraytwo.reverse();
        inputtaker2 = inputtaker2+arraytwo+"\n";
    }
    inputtaker2=inputtaker2.replace(/,/g, " ");
    document.getElementById("text-field-input").value = inputtaker2;
}

// Strip blank
function stripBlank(){
    let inputtaker1 = document.getElementById("text-field-input").value;
    let inputtaker2 = [];
    let arrayone = inputtaker1.split("\n");
    for(i=0; i<arrayone.length; i++){
        let x = arrayone[i].trim();
        if(x!=""){
            inputtaker2.push(x);
        }
    }
    let y ="";
    for(j=0; j<inputtaker2.length; j++){
        y=y+inputtaker2[j]+"\n";
    }
    document.getElementById("text-field-input").value = y;
}

//Add number
function addNumber(){
    let inputtaker1 = document.getElementById("text-field-input").value;
    let inputtaker2 = "";
    let arrayone = inputtaker1.split("\n");
    for(i=0; i<arrayone.length;i++){
        inputtaker2=inputtaker2+ (i+1)+". "+arrayone[i]+"\n";
    }
    document.getElementById("text-field-input").value = inputtaker2;
}

//shuffle
function shuffle(){
    let inputtaker1 = document.getElementById("text-field-input").value;
    let inputtaker2 = "";
    let arrayone = inputtaker1.split("\n");
    let shuffled = arrayone.sort( ()=>Math.random()-0.5);
    for(i=0; i<shuffled.length; i++){
        inputtaker2=inputtaker2+shuffled[i]+"\n";
    }
    document.getElementById("text-field-input").value = inputtaker2;
}