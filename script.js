function ramzantimer(date1) {

    var now = new Date();
    var sehriTime = new Date(now);
    sehriTime.setHours(4);
    sehriTime.setMinutes(54);
    sehriTime.setSeconds(0);
    var iftarTime = new Date(now);
    iftarTime.setHours(18);
    iftarTime.setMinutes(52);
    iftarTime.setSeconds(0);
    
    if ( now >= sehriTime && now < iftarTime) { 
        
        var countDownDate = new Date(2023, 4, date1, 18, 52, 0).getTime();
        var now1 = new Date().getTime();                              // 2023, 4 , date1, 5, 5 ,0
        var time1 = countDownDate - now1;
        var hours1 = Math.floor((time1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes1 = Math.floor((time1 % (1000 * 60 * 60)) / (1000 * 60));
        var sec1 = Math.floor((time1 % (1000 * 60)) / 1000);
        document.getElementById("hours1").innerHTML= Math.abs(hours1);
        document.getElementById("minutes1").innerHTML = Math.abs(minutes1);
        document.getElementById("sec1").innerHTML = Math.abs(sec1);

    }
    
    else
    {  
        
        clearInterval(ramzantimer);
        document.getElementById("hours1").innerHTML = "0" ;
        document.getElementById("minutes1").innerHTML = "0";
        document.getElementById("sec1").innerHTML = "0";
        document.getElementById("timer").innerHTML = "(Roza has not started yet!)" ;
        // document.getElementById("end").innerHTML = "TIME UP!!";
    }
}

function clock() {

    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML = minutes ;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("am").innerHTML =  am;

    date = new Date();
    hours= date.getHours();
    minutes= date.getMinutes();
    sec= date.getSeconds();
    am= 'Am';
    
    if (hours>12) 
    {
        am= 'Pm' ;   
        hours -= 12;
    }
    
} 
setInterval(() => {
    clock();
    var date1 = date.getDate();
    ramzantimer(date1);
}, 1000);

// var days1 = Math.floor(time1 / (1000 * 60 * 60 * 24));
// var hours1 = Math.floor((time1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes1 = Math.floor((time1 % (1000 * 60 * 60)) / (1000 * 60));
// var sec1 = Math.floor((time1 % (1000 * 60)) / 1000);
// console.log(hours1,minutes1,sec1);
// var countDownDate = new Date(2023, 4, 9, 18, 52, 0).getTime();
//  var now = new Date(2023, 4 , 9, 5, 5 ,0 ).getTime(); 
//     var time1 = countDownDate - now;
//     time1
//  var countDownDate = new Date(2023, 4, date1, 18, 52, 0).getTime();
//      var now = new Date(2023, 4 , date1, 5, 5 ,0 ).getTime(); 
//     var time1 = countDownDate - now;
//     time1
// document.getElementById("hours1").innerHTML= Math.abs(hours1);
// document.getElementById("minutes1").innerHTML = Math.abs(minutes1);
// document.getElementById("sec1").innerHTML = Math.abs(sec1);

// if (timel === 0) {
//     var incr+=1
// }
// if (time1 <= 0 || time1 >= 136500000) {
//     var date1 = date.getDate();
//     ramzantimer(date1);    
// }

// console.log(hours1,minutes1,sec1);
