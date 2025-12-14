
let myObject = {
    'name':'Flo',
    'age':45,
    'job':'Dev-Mentor',
    'good_guy':true,
};

// console.table(Object.keys(myObject));  // Gibt ein Array mit den Keys zurück
// console.table(Object.entries(myObject)); // Gibt ein Array mit den Key-Value-Paaren zurück
// Jetzt ein for Loop über das Object.keys machen
let objKeys = Object.keys(myObject);
let ourArray = [];

for (let i = 0; i < objKeys.length; i++) {
    const element = objKeys[i];
    ourArray.push(myObject[objKeys[i]]); // Push nur die Values in das neue ourArray
}

console.table(ourArray);

// Das ist die Weise, wie man aus einem Object ein Array mit den Values macht.