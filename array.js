var names = ["John", "Paul", "George", "Ringo","Ab","Malayalam","Xy"];
console.log(names)
var len  = names.length;

console.log("len = ",len)
for(var i=0;i<names.length;i++){
    console.log(names[i])
}

var reverseArray = names.reverse();
console.log(reverseArray)

//sorting in array

function sortByLen(a,b){

    return a.length - b.length;
}
var sortedArray = names.sort(sortByLen);
console.log(sortedArray)

function sortsaalry(a,b){

    return a - b;
}

var salary = [10,2000,50,4500,89600,45,78,100000]
console.log(salary)
//custom sorting with normal function
//var sortedSalary = salary.sort(sortsaalry);

//arrow function sorting.......
var sortedSalary = salary.sort((a,b)=> a-b);

console.log(sortedSalary)


