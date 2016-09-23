console.log('Loaded!');
//changing the text
var element= document.getElementById("main-text");
element.innerHTML="Praveen";
//move the image
var img = document.getElementById("madi");
img.onclick=function(){
    img.style.marginLeft='100px';
};