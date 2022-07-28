const getStudentData = (students) =>{

    //console.log(student.name)
    for(var i=0;i<students.length;i++){
        console.log(students[i].name)
    }

}

var student = {
    name: "John",
    age: 30,
    isActive: true,
}
var students = [
 
    {
        name: "John",
        age: 30,
        isActive: true,
    },
    {
        name: "Samir",
        age: 25,
        isActive: false,
    },
    {
        name: "Ali",
        age: 20,
        isActive: true,
    }
]
getStudentData(students);

