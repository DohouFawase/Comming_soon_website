let seconds = document.querySelector('.seconds .number');
days = document.querySelector('.days .number')
hours = document.querySelector('.hours .number')
minute = document.querySelector('.minute .number')


let secValue = 11,
    daysValue = 4,
    hoursValue = 12,
    minuteValue = 7

    let timeFunction = setInterval(() => {
        secValue --;
        if (secValue === 0) {
            minuteValue--;
            secValue = 60
        }

        if (minuteValue === 0) {
            hoursValue--;
            minuteValue = 60
        }

        if (hoursValue === 0) {
            daysValue--;
            hoursValue = 60
        }
        if (daysValue === 0) {
            clearInterval(timeFunction)
        }
        
        seconds.textContent = secValue <10 ? `0${secValue}` : secValue;
        minute.textContent = minuteValue <10 ? `0${minuteValue}` : minuteValue;
        days.textContent = daysValue <10 ? `0${daysValue}` : daysValue;
        hours.textContent = hoursValue <10 ? `0${hoursValue}` : hoursValue;
    },1000)