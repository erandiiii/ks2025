//Normal Object
const student = {
    name:"Erand",
    age:26
};

//Object with class
class User {
    constructor(name,surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    greet (){
        console.log("HI");
    }
}
const user1 = new User ("Erand","Berisha",26);
console.log(user1);
user1.greet();

