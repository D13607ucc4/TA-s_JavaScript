function reverseString(texto) {
    if (typeof texto !== "string") {
        console.error("El parámetro debe ser una cadena de texto.");
        return;
    }
    
    const reversed = texto.split("").reverse().join("");
    console.log(reversed);
}


reverseString("Hola Mundo");