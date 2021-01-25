function subtract() {

    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);
    
    let sub = firstNum - secondNum
    document.getElementById('result').textContent = sub

}