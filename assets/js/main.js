jQuery.fn.forceNumeric = function () {
    return this.each(function () {
        $(this).keydown(e => {
            const key = e.which || e.keyCode;
            if (!e.altKey && !e.ctrlKey &&
                key >= 48 && key <= 57 ||
                key >= 96 && key <= 105 ||
                key == 190 || key == 188 || key == 109 || key == 110 ||
                key == 8 || key == 9 || key == 13 ||
                key == 35 || key == 36 ||
                key == 37 || key == 39 ||
                key == 46 || key == 45)
                return true;
            return false;
        });
    });
}
const celsiusInput = $('#celsius').forceNumeric();
const fahrenheitInput = $('#fahrenheit').forceNumeric();

function roundNum(num) {
    return Math.round(num * 100) / 100;
}

function celsiusToFahrenheit() {

    const cTemp = parseFloat(celsiusInput.val());
    const fTemp = (cTemp * 9 / 5) + 32;
    fahrenheitInput.val(roundNum(fTemp));
    if (isNaN(fahrenheitInput.val())) {
        fahrenheitInput.val('');
    }
}

function fahrenheitToCelsius() {
    const fTemp = parseFloat(fahrenheitInput.val());
    const cTemp = (fTemp - 32) * (5 / 9);
    celsiusInput.val(roundNum(cTemp));
    if (isNaN(celsiusInput.val())) {
        celsiusInput.val('');
    }
}

function convert() {
    celsiusInput.keyup(() => {
        celsiusToFahrenheit()
    });
    fahrenheitInput.keyup(() => {
        fahrenheitToCelsius()
    });
}
convert();