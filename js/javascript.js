let qtdCard


qtdCard = prompt ("Insira uma quantidade de cartas entre 4 e 14. O valor precisa ser par");

while(qtdCard % 2 !== 0 || qtdCard < 4 || qtdCard > 14) {
    qtdCard = prompt ("Insira uma quantidade de cartas entre 4 e 14. O valor precisa ser par");
}

for ( let i = 0; i < qtdCard; i++) {
    let content = document.querySelector(".content")
    content.innerHTML += `
    <div class="card" onclick="turn(this)">
            <div class="face front-face">
                <img class="parrot" src="./image/image_front/front.png" alt="">  
            </div>
            <div class="face back-face">
                <img class="gif" src="./image/image_back/bobrossparrot.gif" alt="">
            </div>
        </div>
        `
}


function turn(button) {
    button.classList.toggle("card-select")
    
}

let ar
