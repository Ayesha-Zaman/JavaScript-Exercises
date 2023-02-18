/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
var magician = ["Harry", "Penn", "Ricky", "Mark"];
magician.forEach(show_magicians);

function show_magicians(value){
    console.log(value + "\n");
}