const quotesarray = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela","The way to get started is to quit talking and begin doing. -Walt Disney","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs","If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt"];
document.getElementById("bt-1").onclick = showQuoteOne;
document.getElementById("bt-2").onclick = showQuoteTwo;
document.getElementById("bt-3").onclick = showQuoteThree;
document.getElementById("bt-4").onclick = showQuoteFour;

function showQuoteOne() {
    document.getElementById("Quotes").innerHTML = quotesarray[Math.floor((Math.random()*4))];
    document.getElementById("Quotes").style.color = 'white';
    document.getElementById("Quotes").style.backgroundColor = 'orange';
    document.getElementById("Quotes").style.borderBlockColor = '#556B2F';
}
function showQuoteTwo() {
    document.getElementById("Quotes").innerHTML = quotesarray[Math.floor((Math.random()*4))];
    document.getElementById("Quotes").style.color = 'white';
    document.getElementById("Quotes").style.backgroundColor = 'green';
    document.getElementById("Quotes").style.borderBlockColor = '#556B2F';
}
function showQuoteThree() {
    document.getElementById("Quotes").innerHTML = quotesarray[Math.floor((Math.random()*4))];
    document.getElementById("Quotes").style.color = 'white';
    document.getElementById("Quotes").style.backgroundColor = 'red';
    document.getElementById("Quotes").style.borderBlockColor = '#556B2F';
}
function showQuoteFour() {
    document.getElementById("Quotes").innerHTML = quotesarray[Math.floor((Math.random()*4))];
    document.getElementById("Quotes").style.color = 'black';
    document.getElementById("Quotes").style.backgroundColor = 'yellow';
    document.getElementById("Quotes").style.borderBlockColor = '#556B2F';
}
