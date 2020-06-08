/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui vérifie si le tableau 'ary' contient l'élément recherché 'val'
 * ary = ["2d", "5s", "Ah"] val = "Ah" alors inArray(ary, val) retournera true
 * ary = ["2d", "5s", "Ah"] val = "2h" alors inArray(ary, val) retournera false
 */
// function inArray(ary, val) {

//   if(val in ary == ary.includes(val)){
//     return true
//   }
//   else {
//     return false
//   }
// }

// export { inArray };

function inArray(ary, val) {

 if (ary.indexOf(val) != null){
   return true;
 }
else {
  return false;
}




}
export { inArray };