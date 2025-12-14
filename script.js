// Ein Objekt wird mit geschwungene Klammern definiert
let myObject = {
// Objekteinträge verhalten sich ähnlich wie Listen (Arrays), haben aber immer einen key (schlüsselwort) und einen value
    'name':'Flo',
    'age':45,
    'job':{ // Ein Objekt kann auch verschachtelte Objekte enthalten
        'name': 'Dev-Mentor',
        'company': 'DA'
    },
    'good_guy':true // Boolean Werte sind auch möglich
};

// console.log(myObject.name); // Zugriff auf den Wert des keys 'name'
// console.log(myObject['name']); // Alternativer Zugriff auf den Wert des keys 'name'
// Der Eintrag, der in den eckigen Klammern steht, kann auch ein String sein.
let objKey = 'age';
console.log(myObject[objKey]); // Zugriff auf den Wert des keys 'age'