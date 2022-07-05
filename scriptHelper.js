// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `;
   
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } 
    else if (!isNaN(testInput)) {
        return "Is a Number";
    }
    else if (isNaN(testInput)) {
        return "Not a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let inputs = [pilot, copilot, fuelLevel, cargoLevel];
    let launchInfo = document.getElementById("launchStatus");

    if (inputs.includes('')) {
        alert("All fields are required!")
        } 
    else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
        }
    else if (fuelLevel < 10000 && cargoLevel > 10000) {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = 'Fuel level too low for launch';
        document.getElementById('cargoStatus').innerHTML = 'Cargo mass too heavy for launch';
        launchInfo.innerHTML = 'Shuttle is not ready for launch';
        launchInfo.style.color = 'red';
        }
    else if (fuelLevel < 10000) {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = 'Fuel level too low for launch';
        launchInfo.innerHTML = 'Shuttle is not ready for launch';
        launchInfo.style.color = 'red';
        }
    else if (cargoLevel > 10000) {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('cargoStatus').innerHTML = 'Cargo mass too heavy for launch';
        launchInfo.innerHTML = 'Shuttle is not ready for launch';
        launchInfo.style.color = 'red';
        }
    else {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML;
        document.getElementById('cargoStatus').innerHTML;
        launchInfo.innerHTML = 'Shuttle is ready for launch';
        launchInfo.style.color = 'green';
        }    
}


async function myFetch() {
    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let json = await response.json()
    console.log(json)
    return json
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length)
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
