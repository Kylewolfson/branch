$(document).ready(function() {
  $(".hide").hide();


$("#critterChooser").submit(function(event) {
  event.preventDefault();
  var choice = $("#critter").val();
  console.log(choice);

  if (choice === "Insects") {
    $("#insect").show();
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
