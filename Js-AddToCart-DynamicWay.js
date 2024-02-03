let rowContainerEl = document.getElementById("cartRow");
rowContainerEl.classList.add("cart");
let cartHeading = document.createElement("h1")

cartHeading.textContent = "Add To Cart";
rowContainerEl.appendChild(cartHeading);


let inputContainerEl = document.createElement("div");
inputContainerEl.classList.add("inputContainer");
rowContainerEl.appendChild(inputContainerEl);


let inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.id = "CartItemTextInput";
inputContainerEl.appendChild(inputEl);

let ButtonEl = document.createElement("button");
ButtonEl.classList.add('btn', 'btn-primary', 'btn-add');
ButtonEl.textContent = "Add";
ButtonEl.id = "addBtn";
inputContainerEl.appendChild(ButtonEl);

let listContainerEl = document.createElement("div");
rowContainerEl.appendChild(listContainerEl);

let listContainerHead = document.createElement("h4");
listContainerHead.textContent = "My cart Items";
listContainerHead.classList.add('list-title');
listContainerEl.appendChild(listContainerHead);

ButtonEl.onclick = function(){
    let list = document.createElement("li");
    list.classList.add('list');
    list.textContent = inputEl.value;
    listContainerHead.appendChild(list);

    inputEl.value = '';
}
