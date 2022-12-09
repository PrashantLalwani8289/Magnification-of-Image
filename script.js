var zoomScale = 1.1;
var degree = 0;
$("input#rotate").on("mousemove change", function (){
  degree = - $(this).val(); 
  $("img").css({
    transform: 'rotate(' + degree + 'deg)'
  });
  $(".magnify-lens").css({
    transform: 'rotate(' + degree + 'deg) scale(' + zoomScale +')'
  });
});

$("input#zoom-scale").on("mousemove change", function (){
  zoomScale = $(this).val();
  $(".magnify-lens").css({
    transform: 'rotate(' + degree + 'deg) scale(' + zoomScale +')'
  });
});


$(document).ready(function() {
  // Initiate magnification powers
  $('.zoom').magnify({
    onload: function() {
      console.log('Magnification powers activated!');
    }
  });
});