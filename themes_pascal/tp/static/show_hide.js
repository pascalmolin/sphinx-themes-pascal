/* repli d'éléments : ceci marche
 * .folded { display: none;}
 * .unfolded {display: block;}
 *
 * <div class="unfolded" onclick="javascript:toggle(this)">
 * blabla
 * </div>
 *
 * */
function toggle(elt) {
	/*elt.className = elt.className == "folded" ? "unfolded" : "folded";*/
  /* keep other classes */
	elt.className = elt.className.replace('folded','unfolded').replace('ununfolded','folded');
}
function ToggleId(id) {
  elt = document.getElementById(id);
  toggle(elt);
}
function removelanguage(list) {
  document.getElementById('removelanguage').className = list.join(' ')
}
