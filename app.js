console.log('bacon');
var person = {
    firstName: "Bucky",
    lastName: "Roberts",
    age: 28
};
function addNumber(a,b){
    return a + b;
};

console.log(person);
console.log(addNumber(2,7))

var printBacon = function (){
    console.log("bacon is healthy, don't believe the doctors!");
};
printBacon();

var Bucky = {
    printFirstName: function (){
        console.log("My name is Bucky");
        console.log(this === Bucky)
    }
}
Bucky.printFirstName();

//The default calling context is golbal

function doSomethingWorthless(){
    console.log("\nI am worthless");
    console.log(this === global);

}

doSomethingWorthless();

var movies = require('./module');
movies.printAvatar();
console.log(movies.favMovie);