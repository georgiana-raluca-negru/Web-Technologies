window.onload = function () {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

   
    var contentDiv = document.getElementById("content");
    var h1Element = contentDiv.querySelector("h1");

    
    setInterval(function () {
        h1Element.style.color = getRandomColor();
    }, 1000); 
let uls = document.querySelectorAll('ul.lista');


uls.forEach(ul => {
    
    let listItems = ul.getElementsByTagName('li');
    
    
    for (let item of listItems) {
        
        if (!item.classList.contains('checkmark')) {
            item.classList.add('checkmark');
        }
    }
});
}


