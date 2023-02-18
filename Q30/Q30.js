var users = ["Yasir","Shahid", "Danyal", "Admin", "Ahmad"];
for(var i in users){
    if(users[i] != "Admin"){
        console.log("Hello "+ users[i] + ", thank you for logging in again.\n");
    }else{
        console.log("Hello "+ users[i] + ", would you like to see a status report?.\n");
    }
}