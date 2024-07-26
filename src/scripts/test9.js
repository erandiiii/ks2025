const usersData = ["Erand","Berisha"];

const firstName = usersData[0];
const lastName = usersData[1];

console.log(firstName + " " + lastName);


//
const [firstNamee,lastNamee] = ["Erand","Berisha"];

console.log(firstNamee);
console.log(lastNamee);







const user = {
    name:"Erand",
    age1:26
};

const name = user.name;
const age1 = user.age;


const {name:userName, age} = {
    name :"Erand",
    age:26
};

console.log(userName);
console.log(age);


//////
const sports = ["Football","Basketball"];

const newSports = ["Swimming"];

// this will show 2 arrays
const merege = [sports,newSports]


// this with merge and show only the elements
const mergeArrays = [...sports,...newSports];

console.log(mergeArrays);




///Object merge
const userr = {
    name : "Erand",
    age:26
}

const extendedUser= {
    isAdmin: true,
    ...userr
}

console.log(extendedUser);






///

const password = prompt("Your Password");

if(password === "Hello"){
    console.log("Hello works");
}else if (password === "hello"){
    console.log("hello works");
}else{
    console.log("Access not granted");
}


//// For loop

const hobbiess = ["Football","Swimming"];

for (const hobby of hobbiess){
    console.log(hobby);
}

///
const list = document.querySelector("ul");
list.remove();

/////

function handleTimeout(){
    console.log("Timed out!");
};

const handleTimeout2 = () => {
    console.log("Timed out again1");
};

setTimeout(handleTimeout,2000);
setTimeout(handleTimeout2,3000);
setTimeout(()=>{
    console.log("More timing out...");
},4000);


function greete(greetFn){
    greetFn();
}
greete(()=> console.log("Hi"));


////

function greet1(){
    function greet2(){
        console.log("Hi");
    }
    greet2();
}
greet1();


//// primitive value
const message = "Hello";

//Reference value
const hobbiess1 =["Running","Swimming"];
hobbiess1.push("Working");
console.log(hobbiess1);