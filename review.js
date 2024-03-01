document.getElementById("submit-button").addEventListener("click", function(){
    // const inputElement = document.querySelector("textarea")
    // const inputValue = inputElement.value;
    // console.log(inputValue);

    const inputValue = document.querySelector("textarea").value;
    console.log(inputValue);

    const container = document.getElementById("review");
    const p = document.createElement("p");
    p.innerText =inputValue;
    
    container.appendChild(p);
    document.querySelector("textarea").value = "";


    document.getElementById("text-area").addEventListener("keyup", function(event){
        if(event.key ==="Enter"){
            const inputValue = document.querySelector("textarea").value;
            console.log(inputValue);
            const container = document.getElementById("review")
            const p =document.createElement("p");
            p.innerText = inputValue;
            container.appendChild(p);
            document.querySelector("textarea").value = "";

        }
    })
});