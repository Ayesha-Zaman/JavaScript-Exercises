var Guest = ["Maria", "Naima", "Mahnoor"];
console.log("Guests List: "+ Guest+ "\n\n");
for(var i = 0; i < Guest.length; i++){
    console.log("Hey! " + Guest[i]+ ", I would like you to join us for special dinner tomorrow if you're available.\n");
 }
console.log("\nNaima can't join dinner due to personal reason. \n");
            
var guest_ind = Guest.indexOf("Naima");
Guest[guest_ind]= "Robania";
console.log("New Guest List: "+Guest + "\n");
//sending invitation to new guests
for(var i = 0; i < Guest.length; i++){
    console.log("Hey! " + Guest[i]+ ", I would like you to join us for special dinner tomorrow if you're available.\n");
}
console.log("\n\n")
console.log("Hello lovely friends! I have found a bigger dinner table. Let's share this night with more friends. So I'm going to re-invite everyone with some additional guests. \n\n");
            
//adding guest at start of the list
Guest.unshift("Amna");

//adding guest at the middle of the list
Guest.splice(~~(Guest.length/2), 0, "Faiqa");

//adding guests at the end of the list
Guest.push("Ibrahim");
console.log(Guest+ "\n\n");
            
for(var i in Guest){
    console.log("Hi " + Guest[i]+ ", I would like you to join us for special dinner tomorrow if you're available.\n");
}
console.log("<h3>Hello Everyone I'm sorry to announce that the dinner table won't be arive on time and there are only two spaces my current table can afford!</h3><br><br>")
            
var new_guests = Guest.slice();
//removing  people from invitation
for(var i in Guest){
    console.log("Hey! " + Guest[i]+ ", I'm terribly sorry to announce that we don't have enough space to invite you on dinner I'm hoping to meet you another time.\n");
    new_guests.shift();
    if (new_guests.length == 2){
        break;
    }
}

// sending invitation to the remaining 2 people agian
console.log("\nRemaining Guest List: "+ new_guests +"\n\n")
for(var j in new_guests){
    console.log("Hey! " + new_guests[j]+ ", I would like you join us for special dinner tomorrow.\n");
}

Guest.splice(0,Guest.length);
new_guests.splice(0,Guest.length);