
 //posições dos carros
//  let xCarros1 = 575;
//  let xCarros2 = 575;
//  let xCarros3 = 575;
 let xCarros = [599, 599, 599, 599, 599, 599]
 let yCarros = [60, 130, 190, 250, 360, 390]
 let velocidadeCarros = [12, 9, 6, 8, 8, 6]

 let comprimentoCarros = 60;
 let alturaCarros = 40;

function mostrarCarros() {

    for (let i = 0; i < imagensCarros.length; i++) {

        image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
        
    }

}


    function movimentoCarro() {
        for (let i = 0; i < imagensCarros.length; i++) {

            xCarros[i] -= velocidadeCarros[i];

            if(xCarros[i] < -50){
                xCarros[i] = 900
            }
    }


    // xCarros1 -= 5;
    // xCarros2 -= 7;
    // xCarros3 -= 6;
}


