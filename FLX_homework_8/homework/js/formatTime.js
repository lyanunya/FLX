function formatTime(minutes) {
    let date = {
        minute: 0,
        hour: 0,
        day: 0
    }
    while (minutes > 0) {
        let durationDays = minutes/1440;
        let durationHours = minutes/60;

        if (durationDays >= 1) {
            date.day++;
            minutes -= 1440;
        } else if (durationHours >= 1) {
            date.hour++;
            minutes -= 60;
        } else if (minutes > 0) {
            date.minute++
            minutes--;
        }
    }
    return date.day + ' day(s) ' + date.hour + ' hour(s) ' + date.minute + ' minute(s).';
}
formatTime(120);
formatTime(59);
formatTime(3601);