//Making an array of countries and print its original order
let favouriteCountry: string[] = ["Saudi Arabia", "Dubai", "Qatar", "China"];
console.log("Original order:", favouriteCountry);

//Print an array in alphabatical order without modifying actual array list
console.log("Alphabatical order:", [...favouriteCountry].sort());

//Show that the Array is still in its Original order
console.log("Still in original order:", favouriteCountry);

//Print the Array in Reversed order without modifying the actual Array list
console.log("Reverse order:", [...favouriteCountry].reverse());

//Show that the Array is still in its Original order
console.log("Still in original order:", favouriteCountry);

//We have Changed the original Array order now
console.log("Original Array Reversed:", favouriteCountry.reverse());

//Print the Array to show that it's back to its original order
console.log("Back to Original Order:", favouriteCountry.reverse());

//Print the Array to show that its order has been changed in Alphabatical order now
console.log("Sorted in Alphabatical order:", favouriteCountry.sort());

//We have Changed again the original Array order now
console.log("Original Array Reversed Again:", favouriteCountry.reverse());