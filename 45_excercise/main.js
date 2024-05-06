//Define a Function to Create a car Object with Optional Options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initiatize a car object with manufacturer and model:
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //Add additional options to the car object:
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the Function to create a car object:
var my_car = create_car("Toyota", "Corolla", "color : White", "sunroof : true", "year : 2024");
//Print the Variable to ensure  all the information is stored correctly in the car object:
console.log(my_car);
