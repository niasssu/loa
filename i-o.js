// javascript for output

let i = document.getElementById('input');
let o = document.getElementById('output');

switch (i.textContent) {
case 'option one':
o.textContent = "you selected option one.";
break;
default:
o.textContent = "select an option.";
}
