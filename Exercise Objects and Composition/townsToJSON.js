function townsToJSON(input) {
    let data = input.shift().split('|').filter(x => x != '').map(x => x.trim());

    let towns = [];

    for (const line of input) {
        let [town, lat, lon] = line.split('|').filter(x => x != '').map(x => x.trim());
        lat = Number(lat).toFixed(2);
        lon = Number(lon).toFixed(2);
        let obj = {
            [data[0]]: town,
            [data[1]]: Number(lat),
            [data[2]]: Number(lon),
        }

        towns.push(obj);
    }

    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
console.log('-----');
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);
console.log('-----');
townsToJSON(['| Town | Latitude | Longitude |', '| Random Town | 0.00 | 0.00 |']);
