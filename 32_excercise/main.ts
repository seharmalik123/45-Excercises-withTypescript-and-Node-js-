//Array of Current Users:
let current_users = ["Usman", "ali", "Hamza", "Areeba", "Hira"];

//Array of New Users:
let new_users = ["Ayesha", "Huma", "Ali", "Areeba", "Fariya"];

//Loop through new_users to check usernames avalibility:
new_users.forEach(new_one_user => {

    //Making a condition for username already exist and save in our_condition variable:
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    //Print different messages using If-Else statments:
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);
    }else{
        console.log(`This username ${new_one_user} is available.`);
    }
}) 