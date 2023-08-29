
    function setup() {        
        createCanvas(900, 500);
    }
    
    function draw() {
        
        background(imagemDaEstrada);
        
        mostrarCarros();
        movimentoCarro();
        movimentoMascote();
        mostrarMascote();
        incluirPontos();
        verificaColisao();
    }