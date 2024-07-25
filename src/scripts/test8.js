// Setting an array
const sports = ["Football","Basketball","Swimming"];
console.log(sports[2]);

//Pushing items into existing
sports.push("Bodybuilding");
console.log(sports);

//Finding index and saving it
const index = sports.findIndex((item)=>{
    return item === "Bodybuilding";
});
console.log(index);

//Same thing just shorter
const index1 = sports.findIndex((item)=> item === "Bodybuilding");
console.log(index1);

//Create new array with objects containing values of the old array
const newSports = sports.map((item)=>({text: item}));
console.log(newSports);
