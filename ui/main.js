console.log('Loaded!');
//changing the text
var element= document.getElementById("main-text");
element.innerHTML="Praveen";
//move the image
var img = document.getElementById("madi");
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
    
}

img.onclick=function(){
    //img.style.marginLeft='100px';
    
    var interval = setInterval(moveright,100);
};