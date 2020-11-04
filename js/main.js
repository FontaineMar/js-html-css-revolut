$(document).ready(function(){

// CLASS COST

  var hoverCost = $('#cost')
  hoverCost.mouseenter( function() {
    var closeEl = $('.product , .mission , .help , .lang');
    $('.cost').slideDown();
    closeEl.hide();
  })
  $('.cost').mouseleave( function() {
    $('.cost').toggle()

  })

// CLASS PRODUCT

  var hoverProduct = $('#product')
  hoverProduct.mouseenter( function() {
      var closeEl = $('.cost , .mission , .help , .lang');
      $('.product').slideDown();
      closeEl.hide();
  })
  $('.product').mouseleave( function() {
      $('.product').slideUp();
  })

// CLASS MISSION
  var hoverMission = $('#mission')
  hoverMission.mouseenter( function() {
    var closeEl = $('.cost , .product , .help , .lang');
      $('.mission').slideDown();
        closeEl.hide();
  })
  $('.mission').mouseleave( function() {
      $('.mission').slideUp();
  })


// CLASS HELP
  var hoverHelp = $('#help')
  hoverHelp.mouseenter( function() {
    var closeEl = $('.cost , .mission , .product , .lang');
      $('.help').slideDown();
      closeEl.hide();
  })
  $('.help').mouseleave( function() {
      $('.help').slideUp();
  })


  // CLASS lang
  var clickLang = $('#lang')
  clickLang.click( function() {
    var closeEl = $('.cost , .mission , .product , .help');
    closeEl.hide();
    $('.lang').toggle();
    $('#lang > i').toggleClass('rotate');
  })
})
