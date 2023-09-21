
function alphaMorse() {
    const ref = { 
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };
    return ref;
}

function allowDotAndHyphen(event) {
    document.getElementById('errorMessage').style.display = 'none';
    const keyCode = event.which || event.keyCode;
    if ([190, 189, 8, 32].includes(keyCode)) {
        return;
    }
    const char = String.fromCharCode(keyCode);
    const allowedChars = /[.\s-]/;
    if (!allowedChars.test(char)) {
        event.preventDefault();
    }
}

function validateMorseCode(input) {
    const ref = alphaMorse();
    const words = input.split('   ');
    for (const word of words) {
        const morseChars = word.split(' ');
        for (const morseChar of morseChars) {
            if (!ref.hasOwnProperty(morseChar)) {
                return false;
            }
        }
    }
    return true;
}

function decodeMorse() {
    let morseCode = document.getElementById('morseCode').value;

    if (morseCode !== "") {
        const ref = alphaMorse();
    
        let result = morseCode.split('   ').map(elem => elem.split(' ').map(e => ref[e]).join('')).join(' ');
        const resultDiv = document.getElementById("result");
        const text = document.createTextNode(result);
    
        if (validateMorseCode(morseCode)) {
            resultDiv.appendChild(text);
            document.getElementById('morseCode').value = "";
            document.getElementById('buttonClear').disabled = false;
            document.getElementById('errorMessage').style.display = 'none';
        } else {
            document.getElementById('errorMessage').style.display = 'block';
        }
    }
};

function onClear() {
    document.getElementById("result").innerText = "";
    document.getElementById('buttonClear').disabled = true;
};