    var x=setInterval(ate,1000);
    function ate(){
       
        document.getElementById('time').innerHTML=new Date().toLocaleTimeString();
       
    }
    function ear(){
        clearInterval(x)
    }