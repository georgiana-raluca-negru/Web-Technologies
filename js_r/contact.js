window.onload=function(){
    
    var divText = document.createElement("div");
    divText.id = "text"; 

    
    var paragraf = document.createElement("p");

    
    paragraf.textContent = "Pentru programări sau dacă ai orice fel de întrebări legate de animalul tău, nu ezita să ne contactezi.";

    divText.appendChild(paragraf);

  
    var container = document.getElementsByClassName("container")[0];
    container.appendChild(divText);
    
    var div = document.getElementById("r2c2");

        var paragraf = div.querySelector(".paragraf");

        if (paragraf) {
            div.removeChild(paragraf);
        }
  
const divs = document.querySelectorAll('div.input-box-message');


divs.forEach(div => {
  div.className = div.className.replace('input-box-message', 'input-box');
});
}