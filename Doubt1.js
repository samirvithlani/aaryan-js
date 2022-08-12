var cities = [
    {
        cname: 'los angeles',
        population: 12345,
        area:1000,
        country: 'USA',
        year:2010
    },
    {
        cname: 'new york',
        population: 235678,
        area:1200,
        country: 'USA',
        year:2012
    },
    {
        cname: 'mumbai',
        population: 78952,
        area:2500,
        country: 'India',
        year:2009
    },
    {
        cname: 'sydney',
        population: 6352,
        area:4000,
        country: 'Australia',
        year:2015
    }
]

// function sortCity(a,b){
//     if(a.cname>b.cname)
//     return 1;
//     else if(a.cname<b.cname)
//     return -1;
//     else
//     return 0;
// }
var sortCityByName = cities.sort((a,b)=>{ return a.name>b.name? 1 : a.name<b.name ? -1 : 0 });

//var sortCityByName = cities.sort(sortCity);
console.log("city by name....!!!",sortCityByName);



// var sortCityByYear = cities.sort((a,b)=>a.year-b.year);
// console.log(sortCityByYear);
//  var newData =[{}];
//  for(var i=0;i<sortCityByYear.length;i++){
//     newData[i] ={
//         name:sortCityByYear[i].name,
//         year:sortCityByYear[i].year,
//     }
//  }
//  console.log("new Data --->",newData);
