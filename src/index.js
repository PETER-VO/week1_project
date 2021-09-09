import './styles.css';

function addNewItemToList() {
	var ul = document.getElementById('list');
	var li = document.createElement('li');
	var value = document.getElementById('text').value;
	li.appendChild(document.createTextNode(value));
	ul.appendChild(li);
}

function removeAllFromList() {
	var res = window.confirm('Do you want to remove all items from List?');
	if (res) {
		document.getElementById('list').innerHTML = '';
	}
}

document.getElementById('add-comment').onclick = addNewItemToList;
document.getElementById('remove-comments').onclick = removeAllFromList;
