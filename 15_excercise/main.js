var guestList = ["Ali", "Misbah", "Hina", "Mehak"];
var dontCome = guestList[0];
console.log(dontCome, "Not Come");
guestList.splice(0, 1, "Hurain");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would you like to dinner with me?")); });
