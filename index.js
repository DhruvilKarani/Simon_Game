var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 0;
var previous = 0;
var sequence = [Random()];
$(document).on("keypress", function() {
  if (level == 0) {
    $("#level-title").text("Level 0");
    patternFlash(sequence[0]);
  }
});




function Random() {
  var random_number = Math.floor(4 * Math.random());
  if (random_number == 0) {
    return "green";
  } else if (random_number == 1) {
    return "red";
  } else if (random_number == 2) {
    return "yellow";
  } else {
    return "blue";
  }
}


// Flash animation (on mouse click)
function flash(id) {
  $(id).addClass("pressed");

  setTimeout(function() {
    $(id).removeClass("pressed");
  }, 100);
}

$("#red").click(function() {
  flash("#red");
  var audio = new Audio("sounds/red.mp3");
  audio.play();

});

$("#yellow").click(function() {
  flash("#yellow");

  var audio = new Audio("sounds/yellow.mp3");
  audio.play();

});

$("#blue").click(function() {
  flash("#blue");

  var audio = new Audio("sounds/blue.mp3");
  audio.play();
});

$("#green").click(function() {
  flash("#green");

  var audio = new Audio("sounds/green.mp3");
  audio.play();

});

// Pattern flash (for new )
function patternFlash(id) {
  id = '#' + id;
  $(id).addClass("pressed");
  setTimeout(function() {
    $(id).removeClass("pressed");
  }, 100);
}

// Record Response Pattern

// var saved_sequence=sequence.slice();
// var new_tag="";
// var userClickedPattern = [];
// $(".btn").click(function() {
//   console.log(this.id);
//   userClickedPattern.push(this.id);
//   if (sequence.length>0) {
//     if (this.id != sequence.pop()) {
//       $("#level-title").text("Game Over! Press A Key to Start");
//       level=0;
//     }
//   }
//   if(sequence.length==0){
//     level++;
//     $("#level-title").text("Level "+level);
//     new_tag = Random();
//     saved_sequence =saved_sequence.concat([new_tag]).slice();
//     sequence = saved_sequence.slice();
//   }
// });

var counter = 0;
$(".btn").click(function() {
    if (counter <= level) {
      if (sequence[counter] != this.id) {
        counter = 0;
        level = 0;
        sequence = [Random()];
        $("#level-title").text("Game Over! Press A Key to Start");

      } else {
        counter++;
        if (counter>level) {
          level++;
          $("#level-title").text("Level " + level);
          counter = 0;
          new_tag = Random();
          sequence = sequence.concat([new_tag]);
          setTimeout(function(){patternFlash(new_tag);},1000);
        }

      }
    }
  }

);
