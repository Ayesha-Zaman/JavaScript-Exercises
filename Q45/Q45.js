// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

var cars_obj1 = {
    manf_name: "porche",
    modl_name: "porche V72"
};
var cars_obj2 = {
    manf_name: "porche",
    modl_name: "porche V72",
    car_color: "blue"
};
var cars_obj3 = {
    manf_name: "porche",
    car_color: "blue"
};

function carsInfo(obj){
    if(obj.manf_name && obj.modl_name){
        console.log(obj)
    }else{
        console.log("Please make sure you have entred manufacturer name and model")
    }

}
carsInfo(cars_obj1);
carsInfo(cars_obj2);
carsInfo(cars_obj3);