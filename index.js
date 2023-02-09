//First task starts here

// Find table with id 'age-table'
let table = document.getElementById('age-table')


// All label elements of that table 
table.getElementsByTagName('label')
//or
document.querySelectorAll('#age-table label')


// First td element (with the word Age)
table.getElementsByTagName('td')[0]

//Form with name="search"
let form = document.getElementsByName('search')[0]
//or
document.querySelector('form[name="search"]')

//First input in this form
form.getElementsByTagName('input')[0]

//Last input
form.getElementsByTagName('input')[form.length - 1];

//Second task starts here
let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert( body.firstChild.data ); 

//ANSWER: BODY


