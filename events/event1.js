function demo() {
  document.getElementById("print").innerText = "Hello World";

  document.getElementById("google").innerHTML = "facebook";
  document.getElementById("google").href = "https://www.facebook.com";
  document.getElementById("section").className = "section1";
}
function printing(event) {
    console.log(event.which);
  var x = document.getElementById("name").value;
  console.log(x);
}

var students= ["raj","parth","jay","aarayn","amit"]

function printjson(){

    var json = JSON.stringify(students);
    document.getElementById("json").innerHTML = json;
}
function sortjson(){

    students = students.sort();
    var json = JSON.stringify(students);
    document.getElementById("json1").innerHTML = json;
}
