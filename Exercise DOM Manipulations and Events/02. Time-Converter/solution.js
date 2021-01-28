function attachEventsListeners() {

    let days = document.getElementById('days');
    document.getElementById('daysBtn').addEventListener('click', () => {
        hours.value = days.value * 24;
        minutes.value = days.value * 1440;
        seconds.value = days.value * 86400;
    });
    let hours = document.getElementById('hours');
    document.getElementById('hoursBtn').addEventListener('click', () => {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 3600;
    });
    let minutes = document.getElementById('minutes');
    document.getElementById('minutesBtn').addEventListener('click', () => {
        days.value = minutes.value / 1440;
        hours.value = minutes.value / 60;
        seconds.value = minutes.value * 60;
    });
    let seconds = document.getElementById('seconds');
    document.getElementById('secondsBtn').addEventListener('click', () => {
        days.value = seconds.value / 86400;
        hours.value = seconds.value / 3600;
        minutes.value = seconds.value / 60;
    });
    days.value = '';
    hours.value = '';
    minutes.value = '';
    seconds.value = '';

}