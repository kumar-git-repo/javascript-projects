// Initialize Variables below
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount*averageAstronautMassKg
let fuelMasskg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMasskg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let fuelLevel = "100%"
let weatherStatus = "clear"
let preparedForLiftOff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false
}
// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready") {
    preparedForLiftOff = false
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg >= maximumMassLimit) {
    preparedForLiftOff = false
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= -300 || fuelTempCelsius >= -150){
    preparedForLiftOff = false
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%") {
    preparedForLiftOff = false
}
// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
    preparedForLiftOff = false
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {
    console.log(date)
    console.log(time)
    console.log(astronautCount)
    console.log(crewMassKg)
    console.log(fuelMasskg)
    console.log(shuttleMassKg)
    console.log(totalMassKg)
    console.log(fuelTempCelsius)
    console.log(weatherStatus)
    console.log("Have a safe flight")
} else {
    console.log("Shutdown the launch operation")
}