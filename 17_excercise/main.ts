// Creating a guestlist Array
let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];

//Making variable for those guest who can't come
let dontCome = guestList[0];

//printinting the name of guest who can't come
console.log(dontCome, "He will not come");

// Add or Remove value from guest list array
guestList.splice(0, 1, "Amir");

//printing a message for bigger table
console.log("Good News! We have found a bigger table for dinner");

//Adding a new guest starting index of array
guestList.unshift("Ali");

//Adding a new guest at ending index of array
guestList.push("Zain");

//Get a  Middle index of our guest List array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");

//Print message of updated list
console.log("Updated List of our guests");

//Sending an invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Salam! ${oneguest}, "Would you like to dinner with me"`));

//inform only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");

//Using while-loop to remove guests from the array until only two names remain 
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}

//Sending an invitations to the last two guests on the list
    console.log("Invitation to the last 2 Guests");
    guestList.forEach(lastTwo => console.log( `Luckly ${lastTwo}, You are still invited for dinner`));

    // Removing last two guests from the list
    guestList.pop();
    guestList.pop();

    console.log("Empty List:", guestList);