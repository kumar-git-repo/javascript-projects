//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

let alteredstr = function(str1) {
    if(typeof str1 === 'number') {
        return str1*3;
    } else if (typeof str1 ==='string'){
        return "ARRR!";
    }
}
console.log(alteredstr(35));
console.log(alteredstr("hhhh"))


/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];


let alteredarray = arr.map(function(array1) {
    if(typeof array1 === 'number') {
        return array1*3;
    } else if (typeof array1 ==='string'){
        return "ARRR!";
    }
})
console.log(alteredarray)