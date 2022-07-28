// with return with argument 

function add(){
    console.log("without return type without args")
}
function div(a,b){
    console.log("with return type with args")
    return a/b
}

add()
var x = div(15,2)
console.log(x)
console.log(div(15,5))

//arrow function
//EC6

const mul = (a,b)=>{

    return a*b
}
console.log(mul(5,5))
