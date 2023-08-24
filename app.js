function press(e) {
    document.getElementById('field').value += e ;
}

function equal() {
    var a = document.getElementById('field')
    a.value = eval(a.value)
}

function clr() {
  var a =  document.getElementById('field');
  a.value = a.value.slice(0,-1);
}