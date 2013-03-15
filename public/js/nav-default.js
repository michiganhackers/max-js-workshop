$(document).ready(function() {

  // Resume Navigation, in two statements
  $(".navbar").on("click", "li", function() {
    // Update the nav-bar view
    $(this)
      .addClass("active")
      .siblings().removeClass("active")
    ;

    // Change the targeted section
    $("[data-section-target="+$(this).attr("data-section")+"]")
      .removeClass("hidden")
      .siblings(".section.dynamic").addClass("hidden")
    ;
  });

  // Initialize using click handler
  $("li[data-section=education]").trigger("click");
});
