//$("a")

//$("li a")

//$(".special")

//$("#heading")

$(document).ready(function() {
  
$("#the-button").click(function(){
     // Add or remove a class, depending on whether it is present or not
    $("p").toggleClass("special");
  
     // Chech Wehther the class exists
  if ($("p").hasClass("special")){
        alert("This paragraph is special!");
  }
      else {
         alert("This paragraph is not special.");
     }
    
   $("ul").append($("<l1>").text("Try it again.")); 
  
  }); 
}); 
