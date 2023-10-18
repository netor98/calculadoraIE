const d = document;

const formatInput = () => {
    let $inputs = d.querySelectorAll('.input');
    
    $inputs.forEach(ele => {
        console.log(ele.id);
        let a = '';
        ele.addEventListener('keydown', e => {
            let format;
            e.preventDefault();
            if (ele.value.length > 0 && e.key === '-') e.preventDefault();
            if (ele.value.includes('-') && e.key === '-') e.preventDefault();
            if (isNaN(e.key) && e.key !== 'Backspace' && e.key !== '-' && e.key !== '.') {
                e.preventDefault();
            }
    
            if (e.key === '.' && a.length > 0 && !a.includes('.')) a += e.key;
    
            if (e.key === '-' && a.length === 0 &&  ele.id !== 'inversion'){
                a += e.key;
                format = '-';
            } 
    
            if (isFinite(e.key)) a += e.key
            
            if (e.key === 'Backspace') a = a.slice(0, -1);
            
            console.log(a);                    
    
            if (a.length === 0) {
                format = parseFloat(0).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'MXN'
                });
            }
            if (a.length != 0) {
                format = (format ? format : parseFloat(a).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'MXN'
                })) 
            }
            ele.value = '';
            ele.value = format;
        })
    })
}

export default formatInput;