$(document).ready(function () {
  $("#open").click(function () {
    $(".container").css("transform", "scale(1)");
  });

  $("#close").click(function () {
    $(".container").css("transform", "scale(0)");
  });
});
