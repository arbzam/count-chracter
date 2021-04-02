// logic part

function count_chr() {
    let getId = document.getElementById('chr-val').value.length;
    let show = document.getElementById('show-data').value = "Total Characters are: " + getId;
}

function reset() {
    let show = document.getElementById('show-data').value = "";
}

function cleartextarea() {
    let cleartextarea = document.getElementById('chr-val').value = "";
}
document.getElementById('paste').addEventListener('click', () => {
    let pasteArea = document.getElementById('chr-val');
    pasteArea.value = '';

    navigator.clipboard.readText()
        .then((text) => {
            pasteArea.value = text;
        });
});
var countTarget = document.querySelector("#chr-val");
var wordCount = document.querySelector("#word-count");
var count = function() {
    var characters = countTarget.value;
    var characterLength = characters.length;

    var words = characters.split(/[\n\r\s]+/g).filter(function(word) {
        return word.length > 0;
    });

    wordCount.innerHTML = words.length;
};

count();

window.addEventListener(
    "input",
    function(event) {
        if (event.target.matches("#chr-val")) {
            count();
        }
    },
    false
);

$(document).ready(function() {
    $('.main').addClass('slow-transform');
})