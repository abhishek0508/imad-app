
var butto = document.getElementById('counter');
var counter = 0;
butto.onclick = function(){
    
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function()
    {
        if(request.status === XMLHttpRequest.Done){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET','http://abhishekcool0508.imad.hasura-app.io/counter',true);
    request.send(null);
};