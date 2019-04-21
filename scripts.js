var button = document.getElementById("submit");
var input = document.getElementById("email");
var ul = document.querySelector("ul")

function displayWhatIsInput() {
    // console.log(input.value);
    if (input.value.length > 0 ) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        createButton(li, deleteNodeOnClick)
        ul.appendChild(li);
        input.value = "";
    }
}

function autoComplete(event) {
    if (event.keyCode === 13) {
        displayWhatIsInput();
    }
}

function createButton(context) {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "delete";
    button.onclick = deleteNodeOnClick;
    context.appendChild(button);
}


function deleteNodeOnClick(e) {
    console.log(e);
    this.parentNode.remove();
}



button.addEventListener("click", displayWhatIsInput);

input.addEventListener("keypress", autoComplete)