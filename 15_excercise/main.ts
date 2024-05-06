let guestList = ["Ali", "Misbah", "Hina", "Mehak"];

let dontCome = guestList [0];

console.log(dontCome,"Not Come");

guestList.splice(0, 1, "Hurain");

guestList .forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with me?`));
