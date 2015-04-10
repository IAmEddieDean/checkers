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



/*function chooser(){
  var randNumber = Math.floor(Math.random * 2);
  console.log(randNumber);
  $('#p' + randNumber).addClass('activeplayer');
}*/

function select(){

    if(origin){

      origin.removeClass('selected');

    }

    var target = $(this).addClass('selected');

    origin = target;
    console.log('piece chosen');
    debugger;

  }
function movePieces(){

  destination = $(this);



  var originX = origin.data('x');

  var originY = origin.data('y');

  // store cooridinates of new location

  var destinationX = destination.data('x');

  var destinationY = destination.data('y');

  // variable array for difference of the places

  var vector = [];

  vector.push(destinationX - originX);

  vector.push(destinationY - originY);

  // if difference is one place do this

  if(Math.abs(vector[0]) + Math.abs(vector[1]) === 2){

    if(direction(origin, destination)){

      movePiece();

        //endTurn();

      }
      // if difference is two places do this

} else if(Math.abs(vector[0]) + Math.abs(vector[1]) === 4){

  // run function in if condition with those arguments (only runs if returns true)

  if(direction(origin, destination)){

    //generates deadPiece by calling function generateDead with those arguments

    //var $deadPiece = generateDead(origin, destination);

    // if checkDead function with $deadPiece argument returns true perform execution

    if(checkDead($deadPiece)){

      //debugger;

      $deadPiece.empty();

      $deadPiece.removeClass('checker');

      destination.addClass('current');

      movePiece();

      if(checkPotential() > 3){

        endTurn();

      }

    }

  }

}

}
function direction(origin1, destination1){

                      // arguments passed from move function

      //debugger;

      // king can move either direction

      //if(origin1.hasClass('king')){

      //  return true;

    //  }

      // checks move direction for player 1

      if (destination1.data('x') !== origin1.data('x')) {

        if(origin1.hasClass('p1')){

          // if destination has a lower Y value the function returns true to move function

          if(destination1.data('y') < origin1.data('y')){

            return true;

          }else{

          return false;

          }

        // checks move direction for player 2

        }else{

          // if destination has a higher Y value the function returns true to move function

          if(destination1.data('y') > origin1.data('y')){

            return true;

          }

          return false;

        }

      }

    }
