//mutablity and immutablity...
//immutablity is when you can't change the value of a variable
//mutablity is when you can change the value of a variable
var a = "hello"
a[0] = 'x';
console.log(a)
console.log(a[0])
console.log(a.charAt(0))
a = a.concat(',world')
console.log(a)
console.log(a.length)
a = a.toUpperCase()
console.log(a)
a = a.toLowerCase()
console.log(a)

var res = a.split('')
console.log(res)
var email = "  samir@gmail.com  "
console.log(email)
console.log(email.length)
email = email.trim()
console.log(email)
console.log(email.length)

console.log(email.includes('@'))

email  = email.replace('samir','#')
console.log(email)
email.endsWith(".com") ? console.log("yes"):console.log("no")
//email.endWith(".samir") ? console.log("yes"):console.log("no")
email.toString()

var x = 1;
x = x.toString()
console.log(typeof x)

