console.log('bacon');
var person = {
    firstName: "Bucky",
    lastName: "Roberts",
    age: 28
};
function addNumber(a,b){
    return a + b;
}

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

require('./bucky')
require('./emily')

var fs = require('fs');

fs.writeFileSync("corn.txt", "Corn is good, corn is life");
console.log(fs.readFileSync('corn.txt').toString());

var path = require('path');
var websiteHome = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

//run repeatly
setInterval(function (){
    console.log("beef");
}, 2000)

console.log(__dirname);
console.log(__filename)