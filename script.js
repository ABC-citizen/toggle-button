var button =document.getElementById("btn");

button.onclick=function(){
    document.body.classList.toggle('dark-theme');
    
    if(button.innerHTML=="Dark Mode"){
        button.innerHTML='Light Mode';
    }else{
        button.innerHTML='Dark Mode';
    }
}
