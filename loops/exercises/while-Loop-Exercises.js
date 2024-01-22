//Define three variables for the LaunchCode shuttle - one for the starting fuel level, 
//another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
//let fuelLevel = ''

//let altitude =''

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
 /* const input = require('readline-sync')
  fuelLevel = input.question('Enter the starting fuel level: ')
  
  while (fuelLevel <= 5000 || fuelLevel >30000 || isNaN(fuelLevel)) {
    fuelLevel = input.question('Enter the starting fuel level: ')
  }
 
//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). 
//Validate the entry.


// Now you can use the variable numberOfAstronauts for further processing
//console.log(`Number of astronauts: ${numberOfAstronauts}`);



  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/


// Prompt user for starting fuel level

// Prompt user for starting fuel level*/

const input = require('readline-sync');

// Prompt user for starting fuel level
let fuelLevel = -1;
while (fuelLevel <= 0 || fuelLevel <= 5000 || fuelLevel >= 30000) {
    fuelLevel = Number(input.question("Enter starting fuel level (positive value greater than 5000 but less than 30000): "));
}

// Prompt user for the number of astronauts
let numAstronauts = 0;
while (numAstronauts <= 0 || numAstronauts > 7 || isNaN(numAstronauts)) {
    numAstronauts = Number(input.question("Enter the number of astronauts (1 - 7): "));
}

// Monitor fuel status and altitude
let altitude = 0;
while (fuelLevel >= numAstronauts * 100) {
    fuelLevel -= numAstronauts * 100;
    altitude += 50;
}

// Output the result
console.log(`The shuttle gained an altitude of ${altitude} km.`);

// Check if orbit is achieved
if (altitude >= 2000) {
    console.log("Orbit achieved!");
} else {
    console.log("Failed to reach orbit.");
}
