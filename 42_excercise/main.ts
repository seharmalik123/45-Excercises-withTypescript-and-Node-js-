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

//Call make_great Function to modify Magician names:
let great_magicians = make_great(magician_names);

//Call show_magicians that show modified list of magicians:
show_magicians(great_magicians);