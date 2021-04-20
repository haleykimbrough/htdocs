//create date object and show the date
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

var date = dt.getMonth()+1+'/'+dt.getDate();
console.log(date);
var mon = dt.getMonth();
var intmonth = Number(mon);
var intmon = intmonth+1;
var intmon1 = intmonth+1;
var intmon2 = intmonth+1;
var intmon3 = intmonth+1;
var intmon4 = intmonth+1;
var intmon5 = intmonth+1;
var intmon6 = intmonth+1;
var intmon7 = intmonth+1;
var intmon8 = intmonth+1;
var intmon9 = intmonth+1;
console.log(intmonth);
console.log(intmon);
var day = dt.getDate();
var intday = Number(day);
console.log(intday);
varyest = intday-1;
var2 = intday-2;
var3 = intday-3;
var4 = intday-4;
var5 = intday-5;
var6 = intday-6;
var7 = intday-7;
var8 = intday-8;
var9 = intday-9;

//if intmon == 1 && intday == 1 then intmon == 1 ??
if (intmon == 1 && intday == 1) {
    intmon1 == 12;
    intmon2 == 12;
    intmon3 == 12;
    intmon4 == 12;
    intmon5 == 12;
    intmon6 == 12;
    intmon7 == 12;
    intmon8 == 12;
    intmon9 == 12;
}
else if (intmon == 1 && intday == 2) {
    intmon2 == 12;
    intmon3 == 12;
    intmon4 == 12;
    intmon5 == 12;
    intmon6 == 12;
    intmon7 == 12;
    intmon8 == 12;
    intmon9 == 12;
}
else if (intmon == 1 && intday == 3) {
    intmon3 == 12;
    intmon4 == 12;
    intmon5 == 12;
    intmon6 == 12;
    intmon7 == 12;
    intmon8 == 12;
    intmon9 == 12;
}
else if (intmon == 1 && intday == 4) {
    intmon4 == 12;
    intmon5 == 12;
    intmon6 == 12;
    intmon7 == 12;
    intmon8 == 12;
    intmon9 == 12;
}
else if (intmon == 1 && intday == 5) {
    intmon5 == 12;
    intmon6 == 12;
    intmon7 == 12;
    intmon8 == 12;
    intmon9 == 12;
}
else if (intmon == 1 && intday == 6) {
    intmon6 == 12;
    intmon7 == 12;
    intmon8 == 12;
    intmon9 == 12;
}
else if (intmon == 1 && intday == 7) {
    intmon7 == 12;
    intmon8 == 12;
    intmon9 == 12;
}
else if (intmon == 1 && intday == 8) {
    intmon8 == 12;
    intmon9 == 12;
}
else if (intmon == 1 && intday == 9) {
    intmon9 == 12;
}


var painlev = 5;
// create line chart
let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 35;
Chart.defaults.global.defaultFontColor = 'black';
// let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let lineChart = new Chart(myChart, {
    type: 'line', 
    data:{
        labels:[intmon9 + "/" + var9, intmon8 + "/" + var8, intmon7 + "/" + var7, intmon6 + "/" + var6, intmon5 + "/" + var5, intmon4 + "/" + var4, intmon3 + "/" + var3, intmon2 + "/" + var2, intmon1 + "/" + varyest, date],
        datasets:[{
            label:'Pain Level',
            data:[
                //delete last value and insert new value
                5, 6, 4, 9, 7, 0, painlev, 2, 6, 10
            ],
            backgroundColor:'rgb(210,250,210)',
            borderWidth:4,
            borderColor:'black',
        }]
    },
    options:{
        legend:{
            fontSize:60
        }
    },
});


// window.onload = function () {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
//         theme: "light3",
//         title:{
//             text: "Pain Levels"
//         },
//         data: [{        
//             type: "line",
//               indexLabelFontSize: 20,
//             dataPoints: [
//                 { y: 3 },
//                 { y: 6 },
//                 { y: 7 }, 
//                 { y: 3 },
//                 { y: 9 },
//                 { y: 1 },
//                 { y: 3 },
//                 { y: 7 },
//                 { y: 10 }, 
//                 { y: 8 },
//                 { y: 3 },
//                 { y: 2 }
//             ]
//         }]
//     });
//     chart.render();
    
//     }

    