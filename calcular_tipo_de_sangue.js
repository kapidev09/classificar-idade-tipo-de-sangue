function mostrarTipos (){
    const pai = document.getElementById('pai').value;
    const mae = document.getElementById('mae').value;
    let resultado = ' ';

     if((pai === 'AB' && mae === 'AB' || pai === 'AB' && mae === 'AB')){
        resultado = "o filho tem sangue tipo A, B ou AB";
     } else if ((pai === 'AB' && mae === 'A' || pai === 'A' && mae === 'AB')){
        resultado = "o filho tem sangue tipo AB, A, B ";
     } else if ((pai === 'AB' &8& mae === 'O') || (pai === 'O' && mae === 'AB')) {
        resultado ="FILHO: A ou B";
     }else if ((pai === 'A' && mae === 'A') || (pai === 'A' && mae === 'A'))  {
        resultado = "FILHO: A ou O";
     } else if ((pai === 'A' && mae === 'B') || (pai === 'B' && mae === 'A')) {
        resultado = "FILHO: AB, A, B ou O";
     } else if ((pai === 'A' && mae === 'O') || (pai === 'O' && mae === 'A')) {
        resultado = "FILHO: A ou O";
     } else if ((pai === 'B' && mae === 'B') || (pai === 'B' && mae === "B")) {
        resultado = "FILHO: B ou O";
     } else if ((pai === 'B' && mae === 'O') || (pai === "O" && mae === "B")) {
        resultado = "FILHO: B ou O";
     } else if (pai === 'O' && mae === 'O') {
        resultado = "FILHO: O";
     }
        document.getElementById('resultado').innerText = resultado;







}