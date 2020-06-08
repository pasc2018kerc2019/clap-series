/*
 * /!\ À faire seul !
 * L'objectif est d'additionner les valeurs des deux tableaux :
 * si arr1 = [5, 6, 7]
 * et arr2 = [5, 4, 3]
 * alors plusArray(arr1, arr2) retournera 30 
 */

 /*mettre en place  fonction reduce()
 */

function plusArray(arr1, arr2) {
 //reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
  

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr1.reduce(reducer)+arr2.reduce(reducer)
}

export { plusArray };