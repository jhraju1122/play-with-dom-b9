let sum = 0;
function clickMe () {
     const firstElement = document.getElementById("count");
     sum +=1
    firstElement.innerText = sum;
}
function clickNeg () {
     const firstElement = document.getElementById("count");
     sum -=1
    firstElement.innerText = sum;
}