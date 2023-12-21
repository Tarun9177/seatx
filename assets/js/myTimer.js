myTimer = () =>{
    var minute = 9;
    var second = 60;
    var timerMinute = document.querySelector('#timer-text #minute');
    var timerSecond = document.querySelector('#timer-text #second');
    timerMinute.innerHTML = '10';
    timerSecond.innerHTML = '00';
    
    setInterval(()=>{
        if(minute == 0 && second == 1){
            timerMinute.innerHTML = '00';
            timerSecond.innerHTML = '00';
        }else{
            second--;
            if(second == 0){
                minute --;
                second = 60;
                if(minute == 0){
                    minute = minute;
                }
            }
            if(minute.toString().length == 1){
                minute = "0"+ minute;
            }
            if(second.toString().length == 1){
                second = "0"+second;
            }
            timerMinute.innerHTML = minute;
            timerSecond.innerHTML = second;
        }
    },1000)
}

myTimer();