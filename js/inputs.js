import inversionRecuperationPeriod from "./algorithms/pri.js";
import vpn from "./algorithms/vpn.js";
import vae from "./algorithms/vae.js";
import calculateTIR from "./algorithms/tri.js";


const d = document;


const validateInput = (href) => {
    const $btn = d.getElementById('calc');
    formatTasa();
    $btn.addEventListener('click', e => {
        console.log(href);
        let $inputs = d.querySelectorAll('.input');
        e.preventDefault();
        let numbers = reverseFormat($inputs);
        console.log(numbers);
        switch (href) {
            case "http://127.0.0.1:5500/assets/pri.html":
                inversionRecuperationPeriod(numbers);
                break;
            
            case "http://127.0.0.1:5500/assets/tir.html":
                numbers[0] = numbers[0] * -1;
                const a = calculateTIR(numbers)
                console.log(a * 100);
                break;
            
            case "http://127.0.0.1:5500/assets/vpn.html":
                vpn(numbers);
                break;

            case "http://127.0.0.1:5500/assets/vae.html":
                vae(numbers);
                break;
        }
        
    })
};

const formatTasa = () => {
    let $tasa = d.getElementById('tasa');
    let string = '';
    $tasa.value = '%';
    $tasa.addEventListener('keydown', e => {

        console.log(e.key);


        if (e.target.value.length > 4 && e.key !== 'Backspace') {
            if ( e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') e.preventDefault();
        } 

        if ( isFinite(e.key)) string += e.key

        if ( isNaN(e.key) && e.key !== 'Backspace' && e.key !== '.'){
            if ( e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') 
                e.preventDefault();
        }

        console.log(string);
    })
}




const reverseFormat = (inputs) => {
    let arr = [];
    let tasa;
    if (! d.getElementById('tasa').classList.contains('hide')) {
        tasa = Number(d.getElementById('tasa').value.slice(1));
        arr.push(tasa);
    }
    
    inputs.forEach(ele => {
        arr.push(parseFloat(ele.value.replace(/[^\d.-]/g, '')));
    })
    return arr;
}



export default validateInput;