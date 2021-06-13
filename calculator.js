var btn = document.getElementById('add');
btn.onclick = function() {
    var firstvalue = document.getElementById('first-value');
    var secondvalue = document.getElementById('second-value');
    var result = document.getElementById('result');
    var r = parseInt(firstvalue.value) + parseInt(secondvalue.value);
    result.value = r;
}
var btn = document.getElementById('sub');
btn.onclick = function() {
    var firstvalue = document.getElementById('first-value');
    var secondvalue = document.getElementById('second-value');
    var result = document.getElementById('result');
    var r = parseInt(firstvalue.value) - parseInt(secondvalue.value);
    result.value = r;
}
var btn = document.getElementById('multiply');
btn.onclick = function() {
    var firstvalue = document.getElementById('first-value');
    var secondvalue = document.getElementById('second-value');
    var result = document.getElementById('result');
    var r = parseInt(firstvalue.value) * parseInt(secondvalue.value);
    result.value = r;
}
var btn = document.getElementById('divide');
btn.onclick = function() {
    var firstvalue = document.getElementById('first-value');
    var secondvalue = document.getElementById('second-value');
    var result = document.getElementById('result');
    var r = parseFloat(firstvalue.value) / parseFloat(secondvalue.value);
    result.value = r;
}