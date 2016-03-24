$(document).ready(function() {


$("#critterChooser").submit(function(event) {
  event.preventDefault();
  var choice = $("#critter").val();

  if (choice === "Insects") {
    $("#insect").removeClass("hide");
  }
  else if (choice === "Turtles") {
    $("#turtle").removeClass("hide");
  }
  else if (choice === "Snakes") {
    $("#snake").removeClass("hide");
  }
  $("#critterChooser").addClass("hide");
});

});
