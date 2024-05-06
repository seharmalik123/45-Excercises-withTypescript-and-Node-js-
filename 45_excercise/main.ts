//Define a Function to Create a car Object with Optional Options...
function create_car(manufacturer, model, ...options){
    //Initiatize a car object with manufacturer and model:
    let car = {
        manufacturer : manufacturer,
        model : model
    };

    //Add additional options to the car object:
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}

//Call the Function to create a car object:
let my_car = create_car("Toyota", "Corolla", "color : White","sunroof : true", "year : 2024" );

//Print the Variable to ensure  all the information is stored correctly in the car object:
console.log(my_car);