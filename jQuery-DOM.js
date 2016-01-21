$(document).ready(function() {
  $(".tabs a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
    var tab = $(this).attr("href");
    $(".info").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
});
