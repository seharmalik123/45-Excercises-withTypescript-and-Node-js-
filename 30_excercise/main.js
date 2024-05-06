//Creating an Array:
var userNames = ["Ali", "Misbah", "Zarwa", "Admin", "Usman"];
//Using ForEach Loop on Array:
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("\n Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("\n Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
