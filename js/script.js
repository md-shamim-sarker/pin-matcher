document.getElementById('generate-button').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    document.getElementById('output-field').value = randomNumber;
});

document.getElementById('key-pad').addEventListener('click', function(event) {
    const pressedNumber = event.target.innerText;
    const inputField = document.getElementById('input-field');

    if(isNaN(pressedNumber)) {
        if(pressedNumber == 'C') {
            inputField.value = '';
        } else if(pressedNumber == '<') {
            const pressedNumber = inputField.value;
            const pressedNumberArray = pressedNumber.split('');
            pressedNumberArray.pop();
            inputField.value = pressedNumberArray.join('');
            console.log(pressedNumberArray);
        }
    } else {
        document.getElementById('input-field').value += pressedNumber;
    }
});

document.getElementById('submit-btn').addEventListener('click', function() {

    const outputField = document.getElementById('output-field').value;
    const inputField = document.getElementById('input-field').value;
    if(outputField == inputField) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('fail').style.display = 'none';
    } else {
        document.getElementById('success').style.display = 'none';
        document.getElementById('fail').style.display = 'block';
    }
});