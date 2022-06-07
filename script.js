
const time_of_openning = "10:00";
let key = true;

if(key) console.log("TRUE");

let barista = {
    name: `Maksat`,
    age: 30,
};

console.log(`Barista's name is ${barista.name}, his age: ${barista.age}`);
barista["likes coffee"] = true;
console.log(`Is he like coffee? ${barista["likes coffee"] ? "YES" : "NO"}`);
delete barista["likes coffee"];


let fruits = ["apple", "orange", "peach", "pineapple"];
fruits.push("pear");
let meat = ["beef", "salami", "mutton", "pork"];
meat.pop();
let products = fruits.concat(meat);

let s = null;
for(let i = 0; i < products.length; i++){
    s += products[i];
    i != (products.length - 1) ? s += ", " : s += ".";
}
console.log(`List of products: ${s}`);

let spoiled_products = ["pineapple", "pear", "mutton"];
let fresh_products = products.filter(x => !spoiled_products.includes(x));
s = "";
for(let i = 0; i < fresh_products.length; i++){
    s += fresh_products[i];
    i != (fresh_products.length - 1) ? s += ", " : s += ".";
}
console.log(`List of fresh products: ${s}`);

let price = [2500, 3000, 3300, 4500, 8000];
let discount_price = price.map(function(i){
    return i - 1000;
});
console.log(`Price: ${price.join(", ")}`);
console.log(`Discount price: ${discount_price.join(", ")}`);

function sum(...price){
    let sum = 0;
    for(let i = 0; i < price.length; i++){
        sum += price[i];
    }
    return sum;
}
console.log(`Sum: ${sum(...price)}`);

let new_products = ["milk", "salt", "sugar", ...products];
console.log(new_products.join(", "));

let sliced_new_products = new_products.slice(1, 4);
console.log(sliced_new_products);

let i = 0;
s = null;
while(i < 5){
    i++;
    s += i;
}
console.log(`sum of 1,2,3,4,5: ${s}`);

let result = '';
i = 0;
do{
    result += ++i;
} 
while(i < 5);
console.log(result);

switch("mutton"){
    case "apple":
        console.log(`Price: 350tg`);
    case "orange":
        console.log(`Price: 400tg`);
    case "salami":
        console.log(`Price: 4000tg`);
    case "mutton":
        console.log(`Price: 3500tg`);

let sum = (a, b) => a + b;
let x, y
[x, y] = [1, 3];
console.log( sum(x, y) );


}