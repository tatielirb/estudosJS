var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';

//variaveis
var myFirstVariable = 'Tati';

var myString = 'Tati';
var myNumber =  31;
var myBoolwan = true;
var myArray = ['tati', 10, 'ola'];
var myObject = document.querySelector('h1');


//condicionais
// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');    
// } else {
//   alert('Awwww, but chocolate is my favorite...');    
// }


//Funções
// function multiply(1988,2) {
//   var result = num1 * num2;
//   return result;
// }

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// document.querySelector('html').onclick = function() {};

// var myHTML = document.querySelector('html');
// myHTML.onclick = function() {};

// modificador de imagem
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/unicornio.jpg') {
      myImage.setAttribute ('src','img/uni2.png');
    } else {
      myImage.setAttribute ('src','img/unicornio.jpg');
    }
}

// mensagem personalizada
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

//vetor
var a = new Array();
	a[0] = "dog";
	a[1] = "cat";
	a[2] = "hen";
	a.length
3

var a = ["dog", "cat", "hen"];
	a.length
3