/*
 * /!\ À faire seul !
 *
 * On passe un nombre à notre fonction et il faut que la fonction increment retourne le nombre + 1, exemple : 
 * number = 12 increment(number) retournera 13
 * 
 * Attention, si number n'est pas un nombre on affichera "number doit être un nombre !"
 * number = "bonjour" retournera "bonjour doit être un nombre !"
 */

function increment(number) {
  
  if (isNaN(number) || String(number)){
    
    return number + " doit être un nombre !"
  }
  else {
    return number +1;
  }
}

export { increment };