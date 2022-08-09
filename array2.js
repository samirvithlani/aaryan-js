var technology  = ["js","java","python","node","express","python"]

console.log(technology.indexOf("python"))
console.log(technology.lastIndexOf("python"))

//filter-->

var numbers = [1,2,3,4,"jj",5,6,null,7,8,9,10,"js","java","python","node","express","python"]

var findNumbers = numbers.filter((x)=>(x>=1 && !Number.isNaN(x)))

console.log(findNumbers)

function findEven(num){

    return num%2==0;
}

var evenNUmbers =numbers.filter(findEven);
console.log(evenNUmbers)