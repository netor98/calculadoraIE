import validateInput from "./inputs.js";
import getPage from "./include-html.js";
import addInput from "./addFE.js";
import formatInput from "./formatNumbers.js";


const d = document;
const $main = d.querySelector('main');
console.log($main);

d.addEventListener("DOMContentLoaded", (e) => {
    getPage({
        url: "../assets/main.html", //the main page is main so when the event is finish will load the main.html
        succes: (html) => ($main.innerHTML = html),
        error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
    });
    
});

d.addEventListener("click", (e) => {
    if (e.target.matches('button')) {
        e.preventDefault();
    }
    if (e.target.matches(".link")) {
        console.log(e.target.href === 'http://127.0.0.1:5500/assets/main.html')
        console.log(e.target.href)
        e.preventDefault();
        getPage({
            url: e.target.href, //For the pages we pass the link that was pressed
            succes: (html) => {
                $main.innerHTML = html                
                let tasa = d.querySelectorAll('.tasa');
                if (e.target.href === 'http://127.0.0.1:5500/assets/pri.html' || e.target.href === 'http://127.0.0.1:5500/assets/tir.html') {
                    tasa.forEach(tasa => {
                        tasa.classList.add('hide');
                        tasa.classList.remove('show');
                    })
                } else {
                    tasa.forEach(tasa => {
                        tasa.classList.add('show');
                        tasa.classList.remove('hide');
                    })
                }
            },
            error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
        });
        setTimeout( () => {
            validateInput(e.target.href);
            addInput();
            formatInput();
        }, 100);
    }
});


// Expected output: "123.456,79 €"
