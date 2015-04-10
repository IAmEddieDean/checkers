'use strict';
$(document).ready(init);

function init(){
  drawPieces();
  chooser();
  movePieces();
  reset();
}
function reset(){
  $('#chooser').show();
  $('#players').hide();
  $('td').css('background-color', 'initial');
}
function drawPieces() {
  for(var i = 0; i < 3; i++) {
    for(var j = (i === 1) ? 1 : 0; j < 8; j += 2){
      var square = $('[data-x=' + j + '][data-y=' + i + ']');
      square.addClass('nick');
    }
  }
  for(var y = 5; y < 8; y++) {
    for(var k = (i === 6) ? 1 : 0; k < 8; k += 2){
      var $loc = $('[data-x=' + k + '][data-y=' + y + ']');
      $loc.addClass('john');
    }
  }
}

function chooser(){
  var randNumber = Math.floor(Math.random * 2);
  console.log(randNumber);
  $('#p' + randNumber).addClass('activeplayer');
}
/*$('.nick').draggable({
});
$('.nick').draggable({
  appendTo: '.black'
});*/

function movePieces(){
  $('.nick').click.append( $('.black') );
}
