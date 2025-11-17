
let secretCode = "help";
let currentInput = "";


document.addEventListener("keydown", function(event) {
    
    if (event.key.length === 1) {
        currentInput += event.key.toLowerCase();
    }

    
    if (currentInput.includes(secretCode)) {
    
        alert("Numărul ambulantei de urgenței este 0771237600 !!");

        currentInput = "";
    }

    
    if (currentInput.length > secretCode.length) {
        currentInput = currentInput.slice(1);
    }
});
function afiseazaDimensiuneaTextului(event) {
    
    var style = window.getComputedStyle(event.target);
    
    var fontSize = style.fontSize;
    
    alert("Dimensiunea textului este: " + fontSize);
}


window.onload = function() {
    
    var paragrafe = document.querySelectorAll('p');
    paragrafe.forEach(function(paragraf) {
        paragraf.addEventListener('click', afiseazaDimensiuneaTextului);
    });
    
};
