/*
 * /!\ À essayer seul, me mp si trop compliqué !
 * Le but de cette fonction est de réorganiser un tableau de cartes de la meilleur à la moins bonnes :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors orderCards(cards) retournera ["As", "Ad", "Qs", "8d", "7h"]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * On considère que la valeur de la carte prime sur le type de la carte
 */


 /*mise en place de la hierarchie en fonction de l'index valueCard 0->12 desc


 */

function orderCards(cards) {
 const valueCard = [2, 3, 4, 5, 6, 8, 9, 10,"J", "Q", "K","A"]
 const typeCard = ["d","c","h","s"]
 let result = [];
 
}



export { orderCards };