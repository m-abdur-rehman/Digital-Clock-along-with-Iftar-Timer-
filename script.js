function ramzantimer(date1) {   //function to compare the iftar time with the current time and display accordingly

    var now = new Date();
    var sehriTime = new Date(now);
    sehriTime.setHours(4);
    sehriTime.setMinutes(54);
    sehriTime.setSeconds(0);
    var iftarTime = new Date(now);
    iftarTime.setHours(18);
    iftarTime.setMinutes(52);
    iftarTime.setSeconds(0);
    
    if ( now >= sehriTime && now < iftarTime) {         // check if roza has started
        
        var countDownDate = new Date(2023, 4, date1, 18, 52, 0).getTime();  // takes the time of iftar and compare with the current time  
        var now1 = new Date().getTime();                              
        var time1 = countDownDate - now1;
        var hours1 = Math.floor((time1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes1 = Math.floor((time1 % (1000 * 60 * 60)) / (1000 * 60));
        var sec1 = Math.floor((time1 % (1000 * 60)) / 1000);
        document.getElementById("hours1").innerHTML= Math.abs(hours1);          // store the value w.r.t hours time and minutes
        document.getElementById("minutes1").innerHTML = Math.abs(minutes1);
        document.getElementById("sec1").innerHTML = Math.abs(sec1);

    }
        
    else                                                                        //runs when roza has not started yet
    {  
         //make all the values null
        clearInterval(ramzantimer);
        document.getElementById("hours1").innerHTML = "0" ;
        document.getElementById("minutes1").innerHTML = "0";
        document.getElementById("sec1").innerHTML = "0";
        document.getElementById("timer").innerHTML = "(Roza has not started yet!)" ;    //display a string alert
        // document.getElementById("end").innerHTML = "TIME UP!!";
    }
}

function clock() {                                                                         // a simple digital clock

    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML = minutes ;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("am").innerHTML =  am;

    date = new Date();
    hours= date.getHours();
    minutes= date.getMinutes();
    sec= date.getSeconds();
    am= 'Am';
    
    if (hours>12)                                                                       //time in 12-hrs format
    {
        am= 'Pm' ;   
        hours -= 12;
    }
    
} 
setInterval(() => {                                                                        //updates time after every 1000 milisec(1 second)
    clock();
    var date1 = date.getDate();
    ramzantimer(date1);
}, 1000);



// console.log(hours1,minutes1,sec1);
