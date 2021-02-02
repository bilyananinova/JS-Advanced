function attachEventsListeners() {

    let convertObjToM = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    let inputDistance = document.getElementById('inputDistance');

    document.querySelector('input[type="button"]').addEventListener('click', () => {
        let inTypes = document.getElementById('inputUnits').value;
        let outTypes = document.getElementById('outputUnits').value;

        let distanceToMeters = inputDistance.value * convertObjToM[inTypes];

        let result = distanceToMeters / convertObjToM[outTypes]

        document.getElementById('outputDistance').value = result;

    })

}