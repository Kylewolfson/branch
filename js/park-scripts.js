$(function(){
  $("#height").submit(function(event) {
    event.preventDefault();
    var rider = parseInt($("#inches").val());

    if (rider <= 40) {
      $(".rides").removeClass("hide");
      $("#merry, #teacups").addClass("highlight");
      $("#coaster").removeClass("highlight");
    }

    else if (rider >= 70) {
      $(".rides").show();
      $("#merry, #coaster").addClass("highlight");
      $("#teacups").removeClass("highlight");
    }

    else {
      $(".rides").show();
      $("#merry, #teacups, #coaster").addClass("highlight");
    }
  });
});
