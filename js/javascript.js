let qtdCard

function pedirPar ()  {
    
    qtdCard = prompt ("Insira uma quantidade de cartas a jogar. O valor precisa ser par");
    while (qtdCard % 2 !== 0 ) {
     return pedirPar()
    }
    
}
pedirPar()
