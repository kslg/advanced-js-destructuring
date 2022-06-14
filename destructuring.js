/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */


// No Destructuring arrays
let ages = [30, 26, 27];
let John = ages[0];
let Mary = ages[1];
let Joe = ages[2];

console.log(John, Mary, Joe)
    // output: 30 26 27


// Destructuring arrays
let newAges = [40, 50, 60];
let [Peter, Piper, Paul] = newAges;
console.log(Peter, Piper, Paul)
    // output: 40 50 60

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);
    // output: designer developer accountant


// Destructuring subsets
let languages = ["english", "hindi", "french", "german", "spanish"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
    // output: english hindi

    // to skip values just place two commas in front of the variable.
let [, , MaryNative, MarySecondary] = languages;
console.log(MaryNative, MarySecondary);
    // output: french german


// Using rest parameter syntax
let fruits = ["apple", "plum", "pear", "peach", "banana"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);
    // output apple
    //plum
    // [ 'pear', 'peach', 'banana' ]

// Destructuring objects using rest

let favouriteFoods = {
    brian: "pizza",
    mary: "pasta",
    peter: "steak",
    paul: "chips",

};
let {brian, mary, ...rest} = favouriteFoods;
console.log(brian);
console.log(mary);
console.log(rest);
    // output: pizza
    // pasta
    // { peter: 'steak', paul: 'chips' }



