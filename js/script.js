let input_box = document.querySelector("#input-box");
let list_container = document.querySelector("#list-container");


function addTask() {
    if (input_box.value === "") {
        alert("Please fill data ...");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span)
    }
    input_box.value = "";
    savaData();
}

list_container.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savaData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savaData();
    }
})

function savaData() {
    localStorage.setItem("data", list_container.innerHTML);
}

function showTask() {
    list_container.innerHTML = localStorage.getItem("data");
}
showTask();