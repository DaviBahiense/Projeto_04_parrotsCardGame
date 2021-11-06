let qtdCard;
let arrayCard = [                                   
    "1", "2", "3", "4", "5", "6", "7"              
]
let equal

qtdCard = prompt ("Insira uma quantidade de cartas entre 4 e 14. O valor precisa ser par");

while(qtdCard % 2 !== 0 || qtdCard < 4 || qtdCard > 14) {
    qtdCard = prompt ("Insira uma quantidade de cartas entre 4 e 14. O valor precisa ser par");
}
let arrayPar = arrayCard.slice(0,qtdCard/2);
    arrayPar = arrayPar.concat(arrayPar);

arrayPar.sort(comparador);

for ( let i = 0; i < qtdCard; i++) {
    let content = document.querySelector(".content")
    content.innerHTML += `
        <div class="card" onclick="turn(this)">
            <div class="face front-face">
                <img class="parrot" src="./image/image_front/front.png" alt="">  
            </div>
            <div class="face back-face">
                <img class="gif" src="./image/image_back/${arrayPar[i]}.gif" alt="">
            </div>
        </div>
        `
    
}


function turn(button) {
    button.classList.toggle("card-select")
    
}

 // Após esta linha, a minhaArray estará embaralhada


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
