var Sname = "Ayesha noreen";
console.log(Sname);
var b = Sname.toLowerCase();
console.log(b);
var c = Sname.toUpperCase();
console.log(c);
           
function titlecase(str){
 var d = str.split(" ").map(word => word.charAt(0). toUpperCase() + word.substr(1).toLowerCase()).join(" ");
}
console.log(titlecase(Sname));