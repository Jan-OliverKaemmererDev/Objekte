// Ein Objekt wird mit geschwungene Klammern definiert
let myObject = {
// Objekteinträge verhalten sich ähnlich wie Listen (Arrays), haben aber immer einen key (schlüsselwort) und einen value
    'name':'Flo',
    'age':45,
    // Die Funktion wird zur "Methode" des Objekts myObject - Man nennt die Funktion einfach in dem Fall "Methode".
    'logJob':function(number) { // Funktionen können auch als Werte in einem Objekt gespeichert werden
        console.log('Dev-Mentor' + number); // Hier wird die Zahl, die der Funktion übergeben wird, mit 'Dev-Mentor' kombiniert und in der Konsole ausgegeben
    },
    'good_guy':true // Boolean Werte sind auch möglich
};

// myObject.logJob(123); // Aufruf der Funktion im Objekt & Übergabe des Wertes 88 durch number