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

let s = "";
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

