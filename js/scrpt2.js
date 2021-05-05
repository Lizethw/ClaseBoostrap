function comprar( ) {
    let gansito = false;
    let chocobar= false;

    if (gansito === true){
        alert("Toma tu gansito");

    } 
    //|| = ó / && = y
      if (chocobar=== true && gansito !== true) {
          alert ("Toma tu barra de chocorramo");
        } else {
            alert ("No hay ninguno")
        }
        if (chocobar=== false || gansito !== true) {
            alert ("No hay ninguno")

    }
}