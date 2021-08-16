let upper = document.getElementById("upper-case");
upper.addEventListener("click", function() {
    let text = document.getElementById("myTextarea").value;
    document.getElementById("myTextarea").value = text.toUpperCase();
});

let lower = document.getElementById("lower-case");
lower.addEventListener("click", function() {
    let text = document.getElementById("myTextarea").value;
    document.getElementById("myTextarea").value = text.toLowerCase();
});

let proper = document.getElementById("proper-case");
proper.addEventListener("click", function() {
    let text = document.getElementById("myTextarea").value;
    text = text.toLowerCase().split(' ');
    for (let i = 0; i < text.length; i++){
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    document.getElementById("myTextarea").value = text.join(' ');
});

let sentence = document.getElementById("sentence-case");
sentence.addEventListener("click", function() {
    let text = document.getElementById("myTextarea").value;
    text = text.toLowerCase().split('. ');
    for (let i = 0; i < text.length; i++){
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    document.getElementById("myTextarea").value = text.join('. ');
});

let save = document.getElementById("save-text-file");
save.addEventListener("click", function() {
    let text = document.getElementById("myTextarea").value;
    download("text.txt", text);
});

function download(filename, text) {
    let x = document.createElement('a');
    x.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    x.setAttribute('download', filename);
    x.style.display = 'none';
    document.body.appendChild(x);
    x.click();
    document.body.removeChild(x);
}