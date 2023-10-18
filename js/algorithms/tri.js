// Función para calcular el valor presente neto (VPN)
const d = document;
function calculateNPV(rate, cashflows) {
    let npv = 0;

    for (let i = 0; i < cashflows.length; i++) {
        npv += cashflows[i] / Math.pow(1 + rate, i);
    }

    return npv;
}
  
// Función para calcular la TIR usando el método de Newton-Raphson
function calculateTIR(cashflows, iterations = 100, tolerance = 1.0e-7) {
    let guess = 0.1; // Establece una tasa de inicio

    for (let i = 0; i < iterations; i++) {
        let npv = calculateNPV(guess, cashflows);
        let derivative = 0;

        // Calcula la derivada de la función NPV con respecto a la tasa
        for (let j = 0; j < cashflows.length; j++) {
        derivative -= j * cashflows[j] / Math.pow(1 + guess, j + 1);
        }

        guess -= npv / derivative; // Aplica el método de Newton-Raphson

        // Si la diferencia entre las estimaciones sucesivas es menor que la tolerancia, se considera que ha convergido
        if (Math.abs(npv) < tolerance) {
            return showResult(guess);
        }
    }

// Si no converge, retorna NaN
    return NaN;
}


const showResult = (result) => {

    const $popup = d.getElementById('popup');
    const $close = d.getElementById('close-pop');

    let $title = d.createElement('h2');


    $title.textContent = 'TIR = ' + (result * 100).toFixed(2) + '%';

    $close.insertAdjacentElement('beforebegin', $title);
    $popup.classList.add('open-pop');

    $close.addEventListener('click', e => {
        for (let i = 0; i < $popup.childElementCount; i++) {
            if ($popup.children[i].tagName === 'H2') {
                $popup.children[i].remove();
            }
            
        }
        $popup.classList.remove('open-pop')
    })
}


// Ejemplo de uso

export default calculateTIR;