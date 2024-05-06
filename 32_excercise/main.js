//Array of Current Users:
var current_users = ["Usman", "ali", "Hamza", "Areeba", "Hira"];
//Array of New Users:
var new_users = ["Ayesha", "Huma", "Ali", "Areeba", "Fariya"];
//Loop through new_users to check usernames avalibility:
new_users.forEach(function (new_one_user) {
    //Making a condition for username already exist and save in our_condition variable:
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //Print different messages using If-Else statments:
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available."));
    }
});
