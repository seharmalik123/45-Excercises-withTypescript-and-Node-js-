var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making an array of countries and print its original order
var favouriteCountry = ["Saudi Arabia", "Dubai", "Qatar", "China"];
console.log("Original order:", favouriteCountry);
//Print an array in alphabatical order without modifying actual array list
console.log("Alphabatical order:", __spreadArray([], favouriteCountry, true).sort());
//Show that the Array is still in its Original order
console.log("Still in original order:", favouriteCountry);
//Print the Array in Reversed order without modifying the actual Array list
console.log("Reverse order:", __spreadArray([], favouriteCountry, true).reverse());
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
