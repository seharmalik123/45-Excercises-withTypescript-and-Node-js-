//Define a Function to print each Magician name in an Array:
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//Function to make magician great through .map() it will modify array:
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}` );
}

//Define an Array containing magician names:
let magician_names = ["Harry Potter", "John Potter", "Henry Potter"];

//Making a copy of Original Array through .slice() Function:
let copy_magician_names = magician_names.slice()

//Modify the copied array to include "The Great" with their names:
let copy_great_magicians = make_great(copy_magician_names);

//Show both Array Original and Copied:

//Original:
console.log("original array\n")
show_magicians(magician_names);

//Copied:
console.log("\ncopied array\n")
show_magicians(copy_great_magicians);