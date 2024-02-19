function generateNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('number').innerText = randomNumber;
    checkOddEven(randomNumber);
}

function checkOddEven(number) {
    var resultDiv = document.getElementById('odd-even');
    if (number % 2 === 0) {
        resultDiv.textContent = 'Even - The number is even';
    } else {
        resultDiv.textContent = 'Odd - The number is odd';
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateNumber, checkOddEven };
}
