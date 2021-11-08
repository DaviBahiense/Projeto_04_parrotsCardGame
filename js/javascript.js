let qtdCard;

let arrayCard = [                                   
    "1", "2", "3", "4", "5", "6", "7"              
]

let counter = 1;
let attempt1;
let attempt2;
let attempt1f;
let attempt2f;

let counterPlay = 0;

qtdCard = parseInt (prompt ("Insira uma quantidade de cartas entre 4 e 14. O valor precisa ser par"));


while(qtdCard % 2 !== 0 || qtdCard < 4 || qtdCard > 14) {
    qtdCard = parseInt (prompt ("Insira uma quantidade de cartas entre 4 e 14. O valor precisa ser par"));
}
let arrayPar = arrayCard.slice(0,qtdCard/2);
    arrayPar = arrayPar.concat(arrayPar);

arrayPar.sort(comparator);

function comparator() { 
    return Math.random() - 0.5; 
}



for ( let i = 0; i < qtdCard; i++) {
    let content = document.querySelector(".content")
    content.innerHTML += `
        <div class="card" data-identifier="card" onclick="game_card_select(this)">
            <div class="face front-face" data-identifier="back-face">
                <img class="parrot" src="./image/image_front/front.png" alt="">  
            </div>
            <div class="face back-face" data-identifier="front-face">
                <img class="gif" src="./image/image_back/${arrayPar[i]}.gif" alt="">
            </div>
        </div>
        `
    
}


function game_card_select(card_game) {
    const turn_down = card_game.querySelector(".back-face");
    const turn_down2 = card_game.querySelector(".front-face");

    turn_down.classList.add("card-selected-back");
    turn_down2.classList.add("card-selected-front");

    counterPlay = counterPlay + 1

    if(counter === 1){
        attempt1 = card_game.querySelector(".back-face");
        attempt1f = card_game.querySelector(".front-face");
        counter++;
    }else if(counter === 2){
        attempt2 = card_game.querySelector(".back-face");
        attempt2f = card_game.querySelector(".front-face");

        if(attempt1.innerHTML === attempt2.innerHTML){
            attempt1.classList.add("card-selected-back");
            attempt1f.classList.add("card-selected-front");

            attempt2.classList.add("card-selected-back");
            attempt2f.classList.add("card-selected-front");
            
        }else{

            setTimeout(turn_up, 1000);
        }

        setTimeout(reset_counter, 1000);
    }

    setTimeout(endGame,1000);
}

function turn_up() {
    attempt1.classList.remove("card-selected-back");
    attempt1f.classList.remove("card-selected-front");

    attempt2.classList.remove("card-selected-back");
    attempt2f.classList.remove("card-selected-front");
}

function reset_counter() {
    counter = 1;
    attempt1 = 0;
    attempt2 = 0;
    attempt1f = 0;
    attempt2f = 0;
}

function endGame() {
    
    let searchClass = document.querySelectorAll(".card-selected-back");

    if (searchClass.length === qtdCard){
        alert(`Você ganhou em ${counterPlay} jogadas`);
    }
}    
