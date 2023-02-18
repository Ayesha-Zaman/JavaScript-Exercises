var age = 22;
var marks = 70;
var countries = ["Turkiye", "Dubai","Pakistan","Canada", "Italy"];
var percentage = 60;
var cities = ["Makkah", "Istanbol", "Toronto","Lahore", "Paris"];

console.log((age >= 18 && age <= 28)? true : false);
console.log((age > 18 || age < 20)? true : false);

console.log((marks == 50)? true : false);
console.log((marks != 50)? true : false);

console.log((countries.includes("Pakistan"))? true : false);
console.log((countries.includes("Malasiya"))? true : false);

console.log((percentage >= 80)? true : false);
console.log((percentage < 80)? true : false);

console.log((cities.includes("Lahore"))? true : false);
console.log((!(cities.includes("Gujrat")))? true : false);