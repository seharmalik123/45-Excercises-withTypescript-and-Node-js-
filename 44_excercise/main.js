//Define a Function with a rest parameter that accept items arguments representing our sandwitch:
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich");
}
//Call the Function 3 times with 3 different number of arguments:
makeSandwich("Chicken", "Cheese", "Mayo Garlic", "Egg");
makeSandwich("Bread", "Butter", "Egg");
makeSandwich("Bread", "Butter", "Chicken", "Ketchup", "Mayo Garlic", "Cheese", "Egg");
