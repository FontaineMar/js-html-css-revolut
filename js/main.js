$(document).ready(function(){

  var hoverCost = $('#cost')
  hoverCost.mouseenter( function() {
      $('.cost').slideDown();
  })
  $('.cost').mouseleave( function() {
      $('.cost').slideUp();
  })
  hoverCost.mouseleave( function() {
      $('.cost').slideUp();
  })


  var hoverProduct = $('#product')
  hoverProduct.mouseenter( function() {
      $('.product').slideDown();
  })
  $('.product').mouseleave( function() {
      $('.product').slideUp();
  })
  hoverProduct.mouseleave( function() {
      $('.product').slideUp();
  })

  var hoverMission = $('#mission')
  hoverMission.mouseenter( function() {
      $('.mission').slideDown();
  })
  $('.mission').mouseleave( function() {
      $('.mission').slideUp();
  })
  hoverMission.mouseleave( function() {
      $('.mission').slideUp();
  })

  var hoverHelp = $('#help')
  hoverHelp.mouseenter( function() {
      $('.help').slideDown();
  })
  $('.help').mouseleave( function() {
      $('.help').slideUp();
  })
  hoverHelp.mouseleave( function() {
      $('.help').slideUp();
  })

})
// $( "li" ).hover(
//   function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span" ).last().remove();
//   }
// );
// $( selector ).hover( handlerIn, handlerOut )
