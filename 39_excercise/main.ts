//Creating a Function with Parameters which return a values in string:
function city_country(city: string, country: string) : string{
    return`${city} , ${country}`;
}

//Calling a Function and Print the returned Value:

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Sharjah", "Dubai"));