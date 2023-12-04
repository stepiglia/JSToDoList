const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//add a task
function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; //clearing the input box
    saveData()
}


//check or remove a task
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

//save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// show task from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask() // we are calling the function