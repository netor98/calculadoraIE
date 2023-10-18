import formatInput from "./formatNumbers.js";

const addInput = () => {
    const d = document;
    const $add = d.getElementById('add');
    const $form = d.getElementById('form');
    const $calc = d.getElementById('calc');
    let i = 1;


    d.addEventListener('click', e => {
        if (e.target == $add || e.target.matches('img')) {
            e.preventDefault();
            const $div = d.createElement('div');
            const $delete = d.createElement('button');
            $delete.setAttribute('id', 'delete');
            $delete.setAttribute('type', 'button');
            $delete.innerHTML = '<p>&#x2212</p>'
            $delete.classList.add('button');
            $delete.addEventListener('click', e => {
                $form.removeChild($div);
                console.log($form.children.length);
            })
            const $input = d.createElement('input');
            const $label = d.createElement('label');
            $label.setAttribute('for', `input${i}`);
            $label.textContent = `FE`;
            $input.type = 'text';
            $input.value = defaultFormat();
            $input.classList.add('input')
            $input.required = 'required';
            $input.setAttribute('id', `input${i}`);
            $div.appendChild($label);
            $div.appendChild($input);
            $div.appendChild($delete);
            $add.insertAdjacentElement('beforebegin', $div);
            i++;
            formatInput();
        }
        if ($form.children.length > 3) {
            $calc.style.display = 'inline-block';
        } else {
            $calc.style.display = 'none';
        }
    });
}


const defaultFormat = () => {
    let format = parseFloat(0).toLocaleString('en-US', {
        style: 'currency',
        currency: 'MXN'
    });
    console.log(format)
    return format;
}


export default addInput;