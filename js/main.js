// Start ready function//
$(document).ready(function(){

  $(".l1").addClass("active");
  $(".img1").show();
  $(".img2").hide();
  $(".img3").hide();
  $(".img4").hide();
  $(".img5").hide();
  $(".img6").hide();
  $(".img7").hide();


    $(".l1").click(function(){
       $(".l1").addClass("active");
        $(".img1").show();
       $(".l2").removeClass("active");
        $(".img2").hide();
       $(".l3").removeClass("active");
         $(".img3").hide();
       $(".l4").removeClass("active");
         $(".img4").hide();
       $(".l5").removeClass("active");
         $(".img5").hide();
       $(".l6").removeClass("active");
         $(".img6").hide();
       $(".l7").removeClass("active");
        $(".img7").hide(); 
    });

    $(".l2").click(function(){
        $(".l1").removeClass("active");
         $(".img1").hide();
        $(".l2").addClass("active");
         $(".img2").show();
        $(".l3").removeClass("active");
         $(".img3").hide();
        $(".l4").removeClass("active");
         $(".img4").hide();
        $(".l5").removeClass("active");
         $(".img5").hide();
        $(".l6").removeClass("active");
         $(".img6").hide();
        $(".l7").removeClass("active");
         $(".img7").hide();
     });
     
    $(".l3").click(function(){
        $(".l1").removeClass("active");
         $(".img1").hide();
        $(".l2").removeClass("active");
         $(".img2").hide();
        $(".l3").addClass("active");
         $(".img3").show(); 
        $(".l4").removeClass("active");
         $(".img4").hide();
        $(".l5").removeClass("active");
         $(".img5").hide();
        $(".l6").removeClass("active");
         $(".img6").hide();
        $(".l7").removeClass("active");
         $(".img7").hide();
     });

     $(".l4").click(function(){
        $(".l1").removeClass("active");
         $(".img1").hide();
        $(".l2").removeClass("active");
         $(".img2").hide();
        $(".l3").removeClass("active");
         $(".img3").hide();
        $(".l4").addClass("active");
         $(".img4").show();
        $(".l5").removeClass("active");
         $(".img5").hide();
        $(".l6").removeClass("active");
         $(".img6").hide();
        $(".l7").removeClass("active");
         $(".img7").hide();
     });

     $(".l5").click(function(){
        $(".l1").removeClass("active");
         $(".img1").hide();
        $(".l2").removeClass("active");
         $(".img2").hide();
        $(".l3").removeClass("active");
         $(".img3").hide();
        $(".l4").removeClass("active");
         $(".img4").hide();
        $(".l5").addClass("active");
         $(".img5").show();
        $(".l6").removeClass("active");
         $(".img6").hide();
        $(".l7").removeClass("active");
         $(".img7").hide();
     });

     $(".l6").click(function(){
        $(".l1").removeClass("active");
         $(".img1").hide();
        $(".l2").removeClass("active");
         $(".img2").hide();
        $(".l3").removeClass("active");
         $(".img3").hide();
        $(".l4").removeClass("active");
         $(".img4").hide();
        $(".l5").removeClass("active");
         $(".img5").hide();
        $(".l6").addClass("active");
         $(".img6").show();
        $(".l7").removeClass("active");
         $(".img7").hide();
     });

     $(".l7").click(function(){
        $(".l1").removeClass("active");
         $(".img1").hide();
        $(".l2").removeClass("active");
         $(".img2").hide();
        $(".l3").removeClass("active");
         $(".img3").hide();
        $(".l4").removeClass("active");
         $(".img4").hide();
        $(".l5").removeClass("active");
         $(".img5").hide();
        $(".l6").removeClass("active");
         $(".img6").hide();
        $(".l7").addClass("active");
         $(".img7").show();
     }); 


     $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })

});
// end ready function //