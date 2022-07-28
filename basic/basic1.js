console.log("hello")
console.warn("hello")
console.error("hello")
//variable declaration....
//3 types of variable declaration
//var, let, const 
//var is global variable
//let is block scope variable
//const is block scope variable final value can't be changed

var sname = "sachin"
var age = 30
var isCricket = true
var salary = 15789.25

console.log(typeof sname)
console.log(typeof age)
console.log(typeof isCricket)
console.log(typeof salary)

//JSON  javascript object notation

var person  ={

    name : "sachin",
    age : 30,
    isCricket : true,
    salary : 15789.25,
    hobbies : ["cricket","football","reading"],
    score:{
        test:15000,
        odi:17000,
        t20:1900,
        natinoal:2000
    }
}
console.log(person.name,"--",person.score.test)

var persons = [

    {

        name : "sachin",
        age : 30,
        isCricket : true,
        salary : 15789.25,
        hobbies : ["cricket","football","reading"],
        score:{
            test:15000,
            odi:17000,
            t20:1900,
            natinoal:2000
        }
    },
    {

        name : "mahi",
        age : 35,
        isCricket : true,
        salary : 157859.25,
        hobbies : ["cricket","football"],
        score:{
            test:14500,
            odi:4500,
            t20:7000,
            natinoal:7850
        }
    }
]
console.log(persons)

for(var i=0;i<persons.length;i++){
    console.log(persons[i].name)
    for(j=0;j<persons[i].hobbies.length;j++){
        console.log(persons[i].hobbies[j])
    }
}



