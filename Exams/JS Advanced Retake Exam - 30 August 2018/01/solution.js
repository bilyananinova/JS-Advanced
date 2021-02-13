function addDestination() {
    let [city, country, summer, autumn, winter, spring] = document.getElementsByTagName('input');
    let season = '';
    let options = Array.from(document.getElementById('seasons').children).forEach(option => {
        if (option.selected) {
            season = option.value[0].toUpperCase() + option.value.substring(1);
        }
    });

    if (city.value == '' || country.value == '') {
        return;
    }

    let tr = document.createElement('tr');
    let tdDestination = document.createElement('td');
    tdDestination.textContent = `${city.value}, ${country.value}`;
    let tdSeason = document.createElement('td');
    tdSeason.textContent = season;
    tr.appendChild(tdDestination);
    tr.appendChild(tdSeason);

    if (season == 'Summer') {
        summer.value++;
    } else if (season == 'Autumn') {
        autumn.value++;
    } else if (season == 'Winter') {
        winter.value++;
    } else if (season == 'Spring') {
        spring.value++;
    }

    document.getElementById('destinationsList').appendChild(tr);

    city.value = '';
    country.value = '';

}
