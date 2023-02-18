// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

var magician = ["Harry", "Penn", "Ricky", "Mark"];
magician.forEach(make_great);
magician.forEach(show_magicians);

function show_magicians(value){
    console.log(value + "\n");
}
function make_great(value){
    console.log("The great " +value + "\n");
}
