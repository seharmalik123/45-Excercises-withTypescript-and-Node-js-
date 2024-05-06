//Creating an Array:
let userNames = ["Ali", "Misbah", "Zarwa", "Admin", "Usman"];

//Using ForEach Loop on Array:
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`\n Hello ${oneUser}, would you like to see a status report?`);
    }else{
        console.log(`\n Hello ${oneUser}, thank you for logging in again.`);
    }
})