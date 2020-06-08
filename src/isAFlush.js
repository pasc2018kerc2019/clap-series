/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une couleur (5 cartes de même type), exemple : 
 * cards = ["As", "10s", "Js", "Qs", "Ah", "2s", "3c"] isFlushed(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isFlushed(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : d => ♦, c => ♣, h => ♥, s => ♠
 */
/* -mise en place des 2 tableaux
   -à chaque valueCard doit correspondre le meme typeCard type 5 fois :true

*/
function isAFlush(cards) {
  let d,c,h,s = 0
  const valueCard = [2, 3, 4, 5, 6, 8, 9, 10,"J", "Q", "K","A"];
  const typeCard = ["d","c","h","s"];
  
  
}

export { isAFlush };