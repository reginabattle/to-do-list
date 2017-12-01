const toDoList = document.getElementById("toDoList");
const listItems = document.querySelectorAll("li");
const list = toDoList.children;
const addItemText = document.getElementById("addItemText");
const addButton = document.getElementById("addButton");
const removeButton = document.querySelector(".remove");

// Add buttons to item
const attachButtons = li => {
	let remove = document.createElement('button');
	remove.className = 'remove';
	remove.textContent = 'Remove';
	li.appendChild(remove);
	
	let up = document.createElement('button');
	up.className = 'up';
	up.textContent = 'Move Up';
	li.appendChild(up);
	
	let down = document.createElement('button');
	down.className = 'down';
	down.textContent = 'Move Down';
	li.appendChild(down);
}

// Attach buttons to each item
for (let i = 0; i < list.length; i += 1) {
	attachButtons(list[i]);
}

// Add new item
addButton.addEventListener('click', () => {
	let li = document.createElement('li');
	li.textContent = addItemText.value;
	attachButtons(li)
	toDoList.appendChild(li);
	addItemText.value = "";
});

// Item buttons
toDoList.addEventListener('click', (event) => {
	if(event.target.tagName == 'BUTTON') {
		// Remove item
		if(event.target.className == 'remove') {
			let li = event.target.parentNode;
			let ul = li.parentNode;
			ul.removeChild(li);
		}
		
		// Move item up
		if(event.target.className == 'up') {
			let li = event.target.parentNode;
			let prevItem = li.previousElementSibling;
			let ul = li.parentNode;
			if(prevItem) {
				ul.insertBefore(li, prevItem);
			}
		}
		
		// Move item down
		if(event.target.className == 'down') {
			let li = event.target.parentNode;
			let nextItem = li.nextElementSibling;
			let ul = li.parentNode;
			if(nextItem) {
				ul.insertBefore(nextItem, li);
			}
		}
	}
});
