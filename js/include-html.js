let d = document,
    $main = d.querySelector("main");

/*Function that is execute when the page is loaded */
const getPage = (options) => {
    let { url, succes, error } = options;
    const xhr = new XMLHttpRequest();

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

export default getPage;