
let btnScroll = document.createElement("div");
btnScroll.className = "scroll";
btnScroll.style.cssText = "background-color:rgb(51, 180, 125); display:inline-block; padding: 10px; position:fixed; top:800px; right:70px; border-radius:7px;";
btnScroll.addEventListener("click", () => {

    window.scrollBy({

        left:0,
        top:-200,
        behavior: "smooth"
    });
});

let arrow = document.createElement("i");
arrow.className = "fa-solid fa-arrow-up-long";
btnScroll.appendChild(arrow);


document.body.appendChild(btnScroll);

//########################################################################################

let inputs = document.getElementsByClassName("inputs");

for(let num = 0; num < inputs.length; num++){

    inputs[num].onmouseenter = () => {

        inputs[num].style.cssText = "background-size: 100% 100%;";
    }
}

for(let num = 0; num < inputs.length; num++){

    inputs[num].onmouseleave = () => {

        inputs[num].style.cssText = "background-size: 0% 100%;";
    }
}

let textArea = document.querySelector("textarea");
textArea.onfocus = () => {

    textArea.innerText = '';
}

//##############################################################################################

let messages = document.getElementsByClassName("messages");

function checkValidation()
{
    for(let num = 0; num < inputs.length; num++){

        if(inputs[num].value.trim() === ""){

            messages[num].innerText = `${inputs[num].name} is required`;
        }

        else if(inputs[num].value.trim().split(" ").length < 2 && num === 0){

            messages[num].innerText = `${inputs[num].name} must contain 2 words`;
        }

        else if(inputs[num].value.trim() !== ""){

            messages[num].innerText = "";
        }

        else if(num === 1 && !inputs[num].value.includes("@")){

            messages[num].innerText = `${inputs[num].name} must contain @`;
        }

        else if (num === 2 && !(/^[0-9]+$/.test(inputs[num].value.trim()))) {
            messages[num].innerText = "Please enter numbers only";
        }

    }
}

//#######################################################################################

let submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let isValid = true;

    for (let num = 0; num < inputs.length; num++) {

        if (inputs[num].value.trim() === "") {
            messages[num].innerText = `${inputs[num].name} is required`;
            isValid = false;
        } 
        else if (num === 2 && !(/^[0-9]+$/.test(inputs[num].value.trim()))) {
            messages[num].innerText = "Please enter numbers only";
            isValid = false;
        } 
        else {
            messages[num].innerText = "";
        }
    }

    if (isValid) {
        window.alert("Message submitted successfully");
    }
});

//########################################################################################

let links = document.getElementsByClassName("link");

for(let num = 0; num < links.length; num++){

    links[num].onmouseenter = function(){

        if(num <= links.length - 2){

            this.style.cssText = "border-bottom: 3px solid rgb(37, 184, 114); border-radius:1px";
        }
    }
}

for(let num = 0; num < links.length; num++){

    links[num].onmouseleave = () => {

        links[num].style.cssText = "border-width: 0px;";
    }
}

let id = ["#home", "#about", "#skills", "#projects", "#contact"];

for(let num = 0; num < links.length; num++){

    links[num].onclick = () => {

        links[num].setAttribute("href", id[num]);
    }
}

//###############################################################################################

let groupPercent = document.getElementsByClassName("group-percent");

let percentages = [95, 90, 85, 80];

window.onload = function(){

    for(let num1 = 0; num1 < groupPercent.length; num1++){

        groupPercent[num1].style.backgroundSize = percentages[num1] + "% 100%";
    }
}

//#############################################################################################