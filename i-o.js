// javascript for output

let i = document.getElementById('input');
let o = document.getElementById('output');

switch (i.options[i.selectedIndex].text) {
case 'option one':
o.textContent = "YEAH!";
break;
default:
o.textContent = "wrong answer";
}
