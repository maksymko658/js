// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);

/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123;
console.log(document.doctype);
console.log(document.all);
console.log(document.body);
console.log(document.all[10]);
// document.all[10].textContent = 'Hello';  Change the element with id 10
console.log(document.forms);
console.log(document.links);*/

// GETELEMENTBYID // 

/*let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye'; // Pays atention on Style, so hired text with syle="display:none" it will show

let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

var x = 100;
var y = 20;
var c = 100%20;
console.log(c);*/

// GetElementByClass //

// let items = document.GetElementByClassName('list-group-item');
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// // Gives err
// // items.style.backgroundColor = 'f4f4f4';

// for(let i = 0; i < items.length; i++){
// 	items[i].style.backgroundColor = 'f4f4f4';
// }
//===========================================================COURSE 2================================================================
//Travesing the DOM //
var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode); //container class

/*parentElement*/
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement); //container class


//ChildNodes
//console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FirstChild
// console.log(itemList.firstChild); //delete spacing
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

//lastChild
// console.log(itemList.lastChild); //delete spacing
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello';


// nextSibling// старший брат
// console.log(itemList.nextSibling);
// // next ElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);
// //prebiousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'green';

// createElement

// create a div
// let newDiv = document.createElement('div'); 
// //new Class
// newDiv.className = 'hello';
// //new ID
// newDiv.id = 'hello1';
// // new title
// newDiv.setAttribute('title', 'hello Div');
// //create text node
// let newDivText = document.createTextNode('hello');
// //Add text to the div
//  newDiv.appendChild(newDivText);

// //insure in DOM
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '30px';

// console.log(newDiv);

//===========================================================COURSE 3================================================================
// let button = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick(e){
// 	// console.log('button clicked');
// 	// document.getElementById('header-title').textContent = 'Changed';
// 	// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// // console.log(e.target);
// // console.log(e.target.id);
// // console.log(e.target.className);
// // console.log(e.target.classList);
// // let output = document.getElementById('output');
// // output.innerText = '<h3>'+e.target.id+'</h3>';
// // };

// // console.log(e.type);
// // console.log(e.clientX);//from all page
// // console.log(e.clientY);
// // console.log(e.offsetX);// from button
// // console.log(e.offsetY);
// // console.log(e.altKey);
// // console.log(e.shiftKey);
// // console.log(e.ctrlKey);
// };
var button = document.getElementById('button');
var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);


function runEvent(e){
	e.preventDefault();
	console.log('EVENT TYPE: '+e.type);
// console.log(e.target.value);
// document.getElementById('output').innerHTML = e.target.value;
	// output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
	// document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"//CHANGING COLORS in box and body
}

//===========================================================COURSE 4================================================================