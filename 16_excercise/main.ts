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
