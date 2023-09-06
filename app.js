// getElementById:
const h1 = document.getElementById('main-title');

h1.textContent = 'Some new text content!';
h1.style.color = 'white';
h1.style.backgroundColor = 'darkGrey';

// querySelector:
const li = document.querySelector('li:last-of-type');

li.textContent += ' (Changed!)';
li.style.fontWeight = 'bold';

// querySelectorAll:
const listItemElements = document.querySelectorAll('li');

for (const listItemElement of listItemElements) {
    console.dir(listItemElement);
}

// selecting whole element .body:
const body = document.body;

// selecting children
const ul1 = document.querySelector('ul');

console.log(ul1.children[1]);

// selection thru firstElementChild (such usage is a BAD practice!):
const ul2 = document.body.firstElementChild.nextElementSibling;
const firstLi = ul2.firstElementChild;

console.log(firstLi);

// styling section element:
const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'green';
section.className = 'red-bg';
button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible';
    // }

    section.classList.toggle('invisible');
});