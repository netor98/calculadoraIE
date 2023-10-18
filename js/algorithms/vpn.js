const d = document;
const vpn = (numbers) => {
    const II = numbers[1];
    const tasa = numbers[0] / 100;
    let result = 0; 
    for (let i = 2; i < numbers.length; i++) {
        result += numbers[i] / Math.pow(1 + tasa, i - 1);
    }
    //result =- II;
    
    let vpn = (II * -1) + result;
    if (d.querySelector('main').children[0].textContent === 'Valor Presente Neto') {
        showResult(vpn);
    } else return vpn;
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

    $title.textContent = 'VPN = ' + format;
    if (result < 0) {
        malo.textContent = 'No Factible';  
    } else {
        malo.textContent = 'Factible';
    } 

    $close.insertAdjacentElement('beforebegin', $title);
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


export default vpn;
