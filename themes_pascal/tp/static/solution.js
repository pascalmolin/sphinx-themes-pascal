function selectsols(elt) {
  if(elt.checked) {
    div = document.getElementById('removelanguage');
    div.className = div.className.replace(elt.value,'');
  } else {
    document.getElementById('removelanguage').className += ' '+elt.value;
  }
}
