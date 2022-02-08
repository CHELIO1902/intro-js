/* 3. Desarrolla un método para verificar si una palabra es un palíndromo. Casos de
prueba: var word1 = 'madam' var word2 = 'computadora' */



function palindromo (word1, word2){
  if(word1 == word1.split('').reverse().join('')){
    console.log("La palabra " + word1 + " es un palindromo: --> "+ word1.split('').reverse().join(''))
  }else{
    console.log("La palabra " + word1 + " NO es un palindromo: --> "+ word1.split('').reverse().join(''))
  }
  if(word2 == word2.split('').reverse().join('')){
    console.log("La palabra " + word2 + " es un palindromo: --> "+ word2.split('').reverse().join(''))
  }else{
    console.log("La palabra " + word2 + " NO es un palindromo: --> "+ word2.split('').reverse().join(''))  
  }
}

palindromo ("madam", "computadora");

