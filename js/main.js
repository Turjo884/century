// Start ready function//
$(document).ready(function(){

    $(".l1").click(function(){
       $(".l1").addClass("active");
        
       $(".l2").removeClass("active");
         
       $(".l3").removeClass("active");
         
       $(".l4").removeClass("active");
         
       $(".l5").removeClass("active");
          
       $(".l6").removeClass("active");
         
       $(".l7").removeClass("active");
         
    });

    $(".l2").click(function(){
        $(".l1").removeClass("active");
       
        $(".l2").addClass("active");
       
        $(".l3").removeClass("active");
       
        $(".l4").removeClass("active");
      
        $(".l5").removeClass("active");
      
        $(".l6").removeClass("active");
       
        $(".l7").removeClass("active");
       
     });
     
    $(".l3").click(function(){
        $(".l1").removeClass("active");
        $(".l2").removeClass("active");
        $(".l3").addClass("active");
        $(".l4").removeClass("active");
        $(".l5").removeClass("active");
        $(".l6").removeClass("active");
        $(".l7").removeClass("active");
     });

     $(".l4").click(function(){
        $(".l1").removeClass("active");
        $(".l2").removeClass("active");
        $(".l3").removeClass("active");
        $(".l4").addClass("active");
        $(".l5").removeClass("active");
        $(".l6").removeClass("active");
        $(".l7").removeClass("active");
     });

     $(".l5").click(function(){
        $(".l1").removeClass("active");
        $(".l2").removeClass("active");
        $(".l3").removeClass("active");
        $(".l4").removeClass("active");
        $(".l5").addClass("active");
        $(".l6").removeClass("active");
        $(".l7").removeClass("active");
     });

     $(".l6").click(function(){
        $(".l1").removeClass("active");
        $(".l2").removeClass("active");
        $(".l3").removeClass("active");
        $(".l4").removeClass("active");
        $(".l5").removeClass("active");
        $(".l6").addClass("active");
        $(".l7").removeClass("active");
     });

     $(".l7").click(function(){
        $(".l1").removeClass("active");
        $(".l2").removeClass("active");
        $(".l3").removeClass("active");
        $(".l4").removeClass("active");
        $(".l5").removeClass("active");
        $(".l6").removeClass("active");
        $(".l7").addClass("active");
     }); 

});
// end ready function //