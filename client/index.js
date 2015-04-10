'use strict';
$(document).ready(init);
var origin;
var destination;
var selectedPlayer;
function init(){
  drawPieces();
  $('td').click(select);
  $('td').click(movePieces);
  $('#reset').click(reset);
  $('#start').click(choose);

}
function reset(){
  $('#chooser').show();
  $('#players').hide();
  $('td').css('background-color', 'initial');
}
function drawPieces() {
  for(var i = 0; i < 3; i++) {
    for(var j = (i === 1) ? 1 : 0; j < 8; j += 2){
      var nickSquare = $('[data-x=' + j + '][data-y=' + i + ']');
      nickSquare.addClass('nick');
    }
  }
  for(var t = 5; t < 8; t++) {
    for(var k = (t === 6) ? 0 : 1; k < 8; k += 2){
      var johnSquare = $('[data-x=' + k + '][data-y=' + t + ']');
      johnSquare.addClass('john');
    }
  }
}



function chooser(){
  var randNumber = Math.floor(Math.random * 2);
  console.log(randNumber);
  $('#p' + randNumber).addClass('activeplayer');
}

function select(){

    if(origin){

      origin.removeClass('selected');

    }

    var target = $(this).addClass('selected');

    origin = target;
    console.log('piece chosen');
    debugger;

  }
