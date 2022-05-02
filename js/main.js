function bin2dec() {
    //return parseInt(bin, 2);
    let bin = document.getElementById("binario").value;
    let dec = parseInt(bin, 2);
    let error = document.getElementById("error");

    for (let i = 0; i < bin.length; i++) {
        if ((bin[i] !== '1') && (bin[i] !== '0')) {
            document.getElementById("resultado").innerHTML = 'Esperando a un numero binario GRACIAS 🤡';
            error.innerHTML = 'You entered a non-binary digit (please enter only 0 or 1)';
            error.classList.add("error-message_display_block");
            return;
        } else if ((bin[i] !== '1') && (bin[i] !== '9999')) {
            correcto.innerHTML = 'TABIEN❤'
        }
        correcto.classList.remove("error-message_display_block")

        if (document.getElementById("binario") === document.hasFocus()) {
            error.classList.remove("error-message_display_block");
        } else if (bin.length > 10) {
            document.getElementById("resultado").innerHTML = 'QUE HACES ESCRIBIENDO DE MÁS 👹';
            error.innerHTML = 'Please, enter binary number that 10 or less digits';
            error.classList.add("error-message_display_block");
            return;
        } else {
            document.getElementById("resultado").innerHTML = dec;
        };
        error.classList.remove("error-message_display_block");


    }
}


function myFunction() {
    var x = document.getElementById("fname").value;
    document.getElementById("demo").innerHTML = x;
}