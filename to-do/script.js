const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("Write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saved();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saved();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saved();
    }
}, false);

function saved() {
    localStorage.setItem("data", listContainer.innerHTML);
}
// saved();

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();