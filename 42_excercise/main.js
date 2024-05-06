//Define a Function to print each Magician name in an Array:
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an Array containing magician names:
var magician_names = ["Harry Potter", "John Potter", "Henry Potter"];
//Call the Function to print each Magician names:
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
