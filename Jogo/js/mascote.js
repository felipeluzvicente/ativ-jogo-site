//Posição do mascote
let yMascote = 420;
let xMascote = 40;
let meusPontos = 0;

let colisao = false;

            function verificaColisao() {
                for (let i = 0; i < imagensCarros.length; i++){

                colisao = collideRectCircle(xCarros[i], yCarros[i],
                comprimentoCarros, alturaCarros, xMascote, yMascote, 100);
                    if (colisao){
                        yMascote = 460
                    if (meusPontos > 0){
                        meusPontos -= 1;
                }               
            }
            }
            }


function mostrarMascote() {
    image(imagemDoMascote, xMascote, yMascote, 50, 40);
}
function incluirPontos() {


    text(meusPontos, 20, 25)
    fill(color(250, 0, 0))
    textSize(21)

    if (yMascote < 0){
        xMascote = 40
        yMascote = 460;
        meusPontos ++;
    }
    
}
    function movimentoMascote() {
        
        if(keyIsDown(UP_ARROW)){
            yMascote -= 6;
        }

        if(keyIsDown(DOWN_ARROW)){
            yMascote += 6;
        }

        if(keyIsDown(LEFT_ARROW)){
            xMascote -= 6;
        }

        if(keyIsDown(RIGHT_ARROW)){
            xMascote += 6;
        }
    }

