//Define a Function with a rest parameter that accept items arguments representing our sandwitch:
function makeSandwich(... items: string[]){
    console.log("\nMaking a Sandwich with the following items: \n");


    items.forEach(singleItem => console.log(singleItem));


    console.log("\n Now Enjoy Sandwich");
}

//Call the Function 3 times with 3 different number of arguments:
makeSandwich("Chicken", "Cheese", "Mayo Garlic", "Egg");

makeSandwich("Bread", "Butter", "Egg");

makeSandwich("Bread", "Butter", "Chicken","Ketchup", "Mayo Garlic", "Cheese", "Egg");