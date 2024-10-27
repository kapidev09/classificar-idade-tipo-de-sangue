document.getElementById("classificar").addEventListener ("click", function() {
    let idade = parseInt (document.getElementById("idade").value);
    let resultado = '';
    
    if (idade < 1){
         resultado = "Insira uma idade válida";
    } else if (idade <= 1){
         resultado = "Recém-nascido";
    } else if (idade <= 12){
         resultado = "Criança";
    } else if (idade <= 17){
         resultado = "Adolescente";
    } else if ( idade <= 65){
         resultado = "Adulto";
    } else if (idade <= 79){
         resultado = "idoso";
    } else if (idade <= 150){
         resultado = "Viveu bem em, qual o segredo ? ultra-idoso ";
    } else if (idade <= 300){
         resultado = "pré-historico, vai para de mentir quando ?";
    }else {
         resultado = "idade que ultrapassa a ciência humana";
    }

    document.getElementById("resultado").innerHTML = `classificação: ${resultado}`;
})