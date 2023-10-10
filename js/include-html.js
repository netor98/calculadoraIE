let d = document,
    $main = d.querySelector("main");

/*Function that is execute when the page is loaded */
const getPage = (options) => {
    let { url, succes, error } = options;
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            let html = xhr.responseText; //Save the content html
            succes(html); //the method succes will save the content on the main tag on the html
        } else {
            let message = xhr.statusText || "Error";
            error(`Error: ${xhr.status}, ${message}`);
        }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
};

d.addEventListener("DOMContentLoaded", (e) => {
    getPage({
        url: "./assets/main.html", //the main page is main so when the event is finish will load the main.html
        succes: (html) => ($main.innerHTML = html),
        error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
    });
});

d.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.matches("a") || e.target.matches("button") ) {
        console.log(e.target.href)
        e.preventDefault();
        getPage({
            url: e.target.href, //For the pages we pass the link that was pressed
            succes: (html) => ($main.innerHTML = html),
            error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
        });
    }
});
