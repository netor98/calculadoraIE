/** PRI = a + (b-c) / d
 */

const d = document;

const inversionRecuperationPeriod = (FE) => {
    let periods = [];
    let IIFE = inversionMinusCF(FE);
    let FEA = accumulatedCashFlows(FE);

    let months, days, hours, minutes;
    FE[0] *= -1;
    console.log(FE);
    console.log(IIFE);
    console.log(FEA);

    let period = IIFE.findIndex(recuperation) - 1;

    let II = FE[0] * -1;
    let c = FEA[period];
    let d = FE[period + 1];

    let result = (period + (II - c) / d).toFixed(4);
    periods.push(Math.trunc(result));

    
    months = (result - Math.trunc(result)) * 12,
    periods.push(Math.trunc(months));

    days = (months - Math.trunc(months)) * 30;

    if (days > 0) periods.push(Math.trunc(days));
    else days = 0;

    hours = (days - Math.trunc(days) * 24);
    if (hours > 0) periods.push(Math.trunc(hours));
    else hours = 0;

    minutes = (hours - Math.trunc(hours) * 60);
    if (minutes > 0) periods.push(Math.trunc(minutes));
    else minutes = 0;


    let index = periods.indexOf(0);
    while (index !== -1) {
        periods.splice(index, 1);
        index = periods.indexOf(0);
    }
    console.log(periods.length);
    console.log(periods);
    showResult(periods);
}

const showResult = (arr) => {
    const $popup = d.getElementById('popup');
    const $close = d.getElementById('close-pop');
    

    for (let i = 0; i < arr.length; i++) {
        switch (i) {
            case 0:
                let $title = d.createElement('h2');

                $title.textContent = 'Años: ' + arr[i];
                $close.insertAdjacentElement('beforebegin', $title);
                break;
            case 1:
                let $meses = d.createElement('h2');

                $meses.textContent = 'Meses: ' + arr[i];
                $close.insertAdjacentElement('beforebegin', $meses);
                break;
            case 2:
                let $horas = d.createElement('h2');

                $horas.textContent = 'Dias: ' + arr[i];
                $close.insertAdjacentElement('beforebegin', $horas);
                break;
            case 3:
                let $minutos = d.createElement('h2');

                $minutos.textContent = 'Horas: ' + arr[i];
                $close.insertAdjacentElement('beforebegin', $minutos);
                break;
        }
    }
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

const recuperation = (ele) => ele >= 0;


const inversionMinusCF = (cf) => {
    let arr = [];
    let II = cf[0] * -1;

    arr.push(II);
    console.log(cf.length);
    for (let i = 1; i < cf.length; i++) {
        let result = II + cf[i];
        II += cf[i];
        arr.push(result);
    }
    return arr;
}

const accumulatedCashFlows = (cf) => {
    let arr = [];
    let acc = 0;
    arr.push(acc);
    for (let i = 1; i < cf.length; i++) {
        acc += cf[i];
        arr.push(acc);
    }
    return arr;
}

export default inversionRecuperationPeriod;