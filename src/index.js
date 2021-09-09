import "./styles.css";

function addNewItemToList() {
  var ul = document.getElementById("list");
  var value = document.getElementById("text").value;
  addElementsToList(ul, value);
  getValueAndAdd(ul, value);
}

function getValueAndAdd(ul, value) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  ul.appendChild(li);
}

function removeAllFromList() {
  var res = window.confirm("Do you want to remove all items from List?");
  if (res) {
    document.getElementById("list").innerHTML = "";
  }
}

function addElementsToList(ul) {
  var productList = [
    "Electronics Watch",
    "House wear Items",
    "Kids wear",
    "Women Fashion",
    "Women Fashion"
  ];
  productList.forEach(renderProductList);

  function renderProductList(element, index, arr) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + element;
  }
}

document.getElementById("add-comment").onclick = addNewItemToList;
document.getElementById("remove-comments").onclick = removeAllFromList;
