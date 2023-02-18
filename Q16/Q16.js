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