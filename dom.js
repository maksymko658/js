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