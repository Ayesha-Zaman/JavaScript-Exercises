//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. 

var magician = ["Harry", "Penn", "Ricky", "Mark"];

var new_magician = ["David", "John", "Sadia", "Tony"];
magician.forEach(make_great);
new_magician.forEach(make_great);

function make_great(value){
    if(new_magician.includes(value)){
        console.log("The great " +value + "\n");
    }else{
        console.log(value );
    }
    
}
