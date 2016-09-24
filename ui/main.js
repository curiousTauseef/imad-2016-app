//Counter code
var button = document.getElementById('counter');


button.onclick=function(){
 //Create a request
 var request = new XMLhttpRequest();
  
  
  //Capture the response and store it in a variable 
   request.onreadystatechange = function(){
       if(request.readyState== XMLhttpRequest.DONE){
           //Take some action
           if(request.status==200){
               var counter= request.responseText;
              var span = document.getElementById('count');
  span.innerHTML=counter.toString();
  
               
           }
           
       }
       
       
      };
  //Make the request
  request.open('GET','http://kalamsuthar.imad.hasura-app.io/counter',true);
  request.send(null);
    
};