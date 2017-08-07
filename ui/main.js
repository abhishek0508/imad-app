
var butto = document.getElementById('counter');
var counter = 0;
butto.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString(); 
};