// Array filtern mit der filter() Methode
let myObjectArr = [
    {
        "name":"Max",
        "is_a_good_guy": true 
    },
    {
        "name":"Peter",
        "is_a_good_guy": false 
    },
    {
        "name":"Arnold",
        "is_a_good_guy": true 
    },
    {
        "name":"Justus",
        "is_a_good_guy": true 
    },
    {
        "name":"Bombur",
        "is_a_good_guy": false 
    }
];

// console.log(myObjectArr.filter((word) => {return word.length > 6}));
// .filter funktioniert so, dass (word), durch das array iteriert wie eine Schleife.
// Das (word) ist das einzelne Element, dass wir bei jeder Iteration haben.
// (word) ist der Parameter, => ersetzt das function Schlüsselwort, word.length > 6 (in {return word.length > 6} geändert) ist der Funktionskörper.
// Das was am Ende returned wird, muss ein true oder false sein, dann weiß filter, ob das Element im neuen Array landen soll oder nicht.

console.log(myObjectArr.filter((element) => {return element['is_a_good_guy'] == true}));