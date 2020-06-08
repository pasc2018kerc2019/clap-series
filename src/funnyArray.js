/*
 * /!\ À faire seul !
 * 
 * L'objectif est le suivant :
 *
 * - Si le nombre d'éléments dans le tableau est impair, je retourne l'élément du milieu, exemple :
 * ary = ['un', 'petit', 'tableau'] alors midArray(ary) retournera 'petit'
 * - Si le nombre d'éléments dans le tableau est pair, je retourne une concaténation des éléments exemple :
 * ary = [1,2,3,4] alors funnyArray(ary) retournera 2 + 3 soit 5
 * ary = ['un', 'plus', 'grand', 'tableau'] alors midArray(ary) retournera 'plusgrand'
 * - Si le tableau est vide, je retourne le mot 'rien'
 */
function funnyArray(ary) {
  if (ary.length === 0){
    return "rien"
  }
  if (ary.length/2 !== Number.isInteger){
    let midArray = Math.floor(ary.length / 2)
    let value = ary[midArray]
    return value

  }
  else {
    return value + ary[midArray-1]
    
  }

}

export { funnyArray };