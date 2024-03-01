document.getElementById("submit-button").addEventListener("click", function(){
    // const inputElement = document.querySelector("textarea")
    // const inputValue = inputElement.value;
    // console.log(inputValue);

    const inputValue = document.querySelector("textarea").value;
    console.log(inputValue);

    const container = document.getElementById("review");
    const p = document.createElement("p");
    p.innerText =serialCount + ". " + inputValue;
    
    container.appendChild(p);
    serialCount++;
    document.querySelector("textarea").value = "";
});