const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    /* Se deixarmos desta forma, o retorno será um set, um set de 6 elementos dentro de 1 array e não o array atribuido a const meuArray
    dentro de outra Array como solicitado no exercício. */
    
    //return[mySet];

    //Utilizamos o método spread
    
    return[...mySet];
}

console.log(valoresUnicos(meuArray));