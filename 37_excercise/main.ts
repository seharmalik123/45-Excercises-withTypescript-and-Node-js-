// Making a Function:
function make_shirt(size: string = "Large", printMessage: string = "I love TypeScript"){
    console.log(`\nCreating a ${size} shirt with ${printMessage} prints on shirt`);
}

// Calling a Function with By-default Values:
make_shirt();

//Calling a Function now with Medium size with Default message:
make_shirt("Medium");

//Calling a Function now with Small size and different print message:
make_shirt("Small", "I Love JavaScript");