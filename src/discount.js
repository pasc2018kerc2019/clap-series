/*
 * /!\ À faire seul !
 *
 * Le but de cette fonction est de retourne le prix après réduction :
 * price = 100, percent = 30 alors discount(price, percent) retournera "70€"
 * 
 * Attention, le prix est une chaîne de caractère suivi du symbole €
 */

function discount(price, percent) {
  let resultPrice = price - (price*percent/100)
  
  
  return resultPrice+" €";
}

export { discount };