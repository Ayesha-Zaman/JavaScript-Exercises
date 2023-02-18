var Guest = ["Maria", "Naima", "Mahnoor"];

// Naima said she'll not be available for dinner. let's find the index of Naima          
var guest_ind = Guest.indexOf("Naima");

// updating the list removing Naima and inviting Robania
Guest[guest_ind]= "Robania";

//adding guest at start of the list
Guest.unshift("Amna");

//adding guest at the middle of the list
Guest.splice(~~(Guest.length/2), 0, "Faiqa");

//adding guests at the end of the list
Guest.push("Ibrahim");

var new_guests = Guest.slice();
//removing  people from invitation
for(var x in Guest){
    new_guests.shift();
    if (new_guests.length == 2){
        break;
    }
}
console.log(new_guests.length + " number of people I'm inviting to dinner.")