// inheritance
class Car{
    // Constructor : by default page load krte hai ussai constructor mai call krte hai
    constructor(brand){
         this.brand=brand;
    }
    display(){
        return "The brand of car is "+this.brand;
    }
}

class Maruti extends Car{
    constructor(carName,brand){
        super(brand);
        this.carName=carName;
    }
    display1(){
        // super.display();
        console.log(this.display());
        console.log("The car name is"+this.carName);
    }
}

let M1=new Maruti("i-10","hyundai");
M1.display1();

// prototype
class Person{
    constructor(name){
        this.name = name;
        this.lastName = "Varshney"
    }

    greeting(){
        console.log("the name is ", this.name,this.lastName);
        // console.log('the name is ' ${this.name} "lastName" ${this.lastName}))
    }
}

class Student extends Person{

}

let st1 = new Student("Yash");
st1.greeting();

//-------------------------------
var a = 12;
var b = 10;

console.log(`we are learning ${a} a and b ${b}`)

//Prototype
function Per (name ,lastName,age){
        this.name = name;
        this.lastName = "Varshney"
        this.age = age;
}
    Per.prototype.marks = 12;

    var P1 = new Per("raj",10,20)
    console.log(P1,P1.marks)
    