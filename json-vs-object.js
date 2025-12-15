// Das ist kein valides JSON. Das Backend wird Probleme damit haben, wenn es dorthin geschickt wird.
/* let myObject = {
    654: 'Hallo',
};

console.log(myObject); */

// Das ist valides JSON. Das Backend wird damit keine Probleme haben, wenn es dorthin geschickt wird.
let myObject = {
    "name":"Flo", // Die Schlüssel sind Strings mit Gänsefüßchen
    "is_a_good_guy" : true, // Booleans werden klein geschrieben
};

console.log(myObject);

// Jedes JSON ist ein Objekt, aber nicht jedes Objekt ist ein JSON.