//Creating an Array
var userNames = ["Ali", "Misbah", "Zarwa", "Admin", "Usman"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is empty We need to find some Users!");
}
else {
    //Using ForEach Loop on Array:
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("\n Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("\n Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
