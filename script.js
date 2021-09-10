let elForm = document.querySelector("#form");
let elInput = document.querySelector("#input");
let resultPerson = document.querySelector(".person");
let resultBicycle = document.querySelector(".bicycle");
let resultCar = document.querySelector(".car");
let resultPlane = document.querySelector(".plane");

let personScore = 3.6;
let bicycleScore = 20.1;
let carScore = 70;
let planeScore = 800;

elForm.addEventListener('submit', function(evt){
    evt.preventDefault()

    let inputResult = (elInput.value)-0

    if (inputResult >= 0 && !isNaN(inputResult)) {

        //person
        let hourPerson = Math.floor(elInput.value / personScore)+ " hour ";
        let minutePerson =  (((elInput.value / personScore).toFixed(2) - Math.floor(elInput.value / personScore)) * 60).toFixed(0)+ " minute "+ 'by person'; 
        
        resultPerson.textContent = hourPerson + minutePerson;

        //bicycle
        let hourBicycle = Math.floor(elInput.value / bicycleScore)+ " hour ";
        let minuteBicycle =  (((elInput.value / bicycleScore).toFixed(2) - Math.floor(elInput.value / bicycleScore)) * 60).toFixed(0)+ " minute " + 'by Bicycle';

        resultBicycle.textContent = hourBicycle + minuteBicycle;

        //car
        let hourCar = Math.floor(elInput.value / carScore)+ " hour ";
        let minuteCar =  (((elInput.value / carScore).toFixed(2) - Math.floor(elInput.value / carScore)) * 60).toFixed(0)+ " minute " + 'by Car';

        resultCar.textContent = hourCar + minuteCar;

        //plane
        let hourPlane = Math.floor(elInput.value / planeScore)+ " hour ";
        let minutePlane =  (((elInput.value / planeScore).toFixed(2) - Math.floor(elInput.value / planeScore)) * 60).toFixed(0)+ " minute " + 'by Plane';

        resultPlane.textContent = hourPlane + minutePlane;
    }else{   
    }
})  