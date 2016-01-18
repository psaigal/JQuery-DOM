// $(document).ready(function() {
//   $("#content").append( "<h1 id='restaurant-title'>Central Perk</h1>" );
//   $("#content").append("<p>Coffee! As seen on the hit TV Show FRIENDS</p>");
//   $("#content").append("<img src='centralperk.jpg'>");
// });

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
