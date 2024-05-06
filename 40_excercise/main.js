//Creating the make_album Function:
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three Function and creating three variables with different values:
var album1 = make_album("Shahzad Roy", "Album title 1");
var album2 = make_album("Abrar ul haq", "Album title 2");
//Calling a make_album function with third parameters:
var album3 = make_album("Sheraz Uppal", "Album title 3", 10);
//Print values of our object created my function:
console.log(album1);
console.log(album2);
console.log(album3);
