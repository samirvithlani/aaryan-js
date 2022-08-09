var languages = ["hindi","english","bengali","gujarati","telugu","tamil","kannada","malayalam","marathi","punjabi","urdu"];

function searchFor(arr,q){
    
    function condition(ele){
        return ele.indexOf(q) !== -1
    }
    return arr.filter(condition)
}

var result = searchFor(languages,"hindi")
console.log(result)

//var res = languages.includes("bengali"); -->true
var res = languages.includes("malayalam",5) //--false
console.log(res)

var employees = [
    {
        name:"John",
        age:30,
    },
    {
        name:"raj",
        age:45,
    },
    {
        name:"neha",
        age:47,
    },
]


//filter json array by age
var employees1 = employees.filter(x=>x.age>=40)
console.log(employees1)