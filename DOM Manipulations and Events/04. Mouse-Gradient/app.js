function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    let output = document.getElementById('result');

    function onMove(event) {
       let offset = event.offsetX;
       let percent = Math.floor(offset / event.target.clientWidth * 100);

        output.textContent = `${percent}%`;
    }
}