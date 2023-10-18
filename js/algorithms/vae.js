import vpn from "./vpn.js";

const d = document;
const vae = (numbers) => {
    const tasa = numbers[0] / 100;

    let result = vpn(numbers);
    let numerador = result * tasa;
    console.log(numerador);

    
    let denominador = 1 - ( 1 / Math.pow((1 + tasa), numbers.length - 2));
    console.log(denominador);

    let vae = numerador / denominador;
    showResult(vae);
}


const showResult = (result) => {
    const malo = d.createElement('h2');
    const $popup = d.getElementById('popup');
    const $close = d.getElementById('close-pop');

    let $title = d.createElement('h2');


    let format = result.toLocaleString('en-US', {
        style: 'currency',
        currency: 'MXN'
    });

    console.log(format);

    $title.textContent = 'VAE = ' + format;
    
    $close.insertAdjacentElement('beforebegin', $title);
    if (result < 0) {
        malo.textContent = 'No Factible';  
    } else {
        malo.textContent = 'Factible';
    } 

    $close.insertAdjacentElement('beforebegin', malo);

    
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

export default vae;