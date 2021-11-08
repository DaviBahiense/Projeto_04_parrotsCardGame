let qtdCard;

let arrayCard = [                                   
    "1", "2", "3", "4", "5", "6", "7"              
]

let counter = 1;
let play1;
let play2;
let play1f;
let play2f;

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

    turn_down.classList.add("selected-back");
    turn_down2.classList.add("selected-front");

    counterPlay = counterPlay + 1

    if(counter === 1){
        play1 = card_game.querySelector(".back-face");
        play1f = card_game.querySelector(".front-face");
        counter++;
    }else if(counter === 2){
        play2 = card_game.querySelector(".back-face");
        play2f = card_game.querySelector(".front-face");

        if(play1.innerHTML === play2.innerHTML){
            play1.classList.add("selected-back");
            play1f.classList.add("selected-front");

            play2.classList.add("selected-back");
            play2f.classList.add("selected-front");
            
        }else{

            setTimeout(turn_up, 1000);
        }

        setTimeout(reset_counter, 1000);
    }

    setTimeout(endGame, 1000);
}

function turn_up() {
    play1.classList.remove("selected-back");
    play1f.classList.remove("selected-front");

    play2.classList.remove("selected-back");
    play2f.classList.remove("selected-front");
}

function reset_counter() {
    counter = 1;
    play1 = 0;
    play2 = 0;
    play1f = 0;
    play2f = 0;
}

function endGame() {
    
    let searchClass = document.querySelectorAll(".selected-back");

    if (searchClass.length === qtdCard){
        alert(`Você ganhou em ${counterPlay} jogadas`);
    }
}    
