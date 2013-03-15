$(document).ready(function() {

  const WRAPPER_OFFSET = 20; // Experimentally Determined...
  const HEADER_HEIGHT = $(".personal").outerHeight()+$(".navbar").outerHeight();
  
  // Grab a reference to the $DOM element
  var $innerWrapper = $(".inner-wrapper");
  $innerWrapper.css("height", HEADER_HEIGHT);

  // Swap out hidden for hidden-opacity
  $(".hidden").removeClass("hidden").addClass("hidden-opacity");


  // Resume Navigation, in two statements
  $(".navbar").on("click", "li", function() {
    // Grab the section
    var $section = $("[data-section-target="+$(this).attr("data-section")+"]");

    $(this)
      // Make this nav elem active
      .addClass("active")
      // Make all of the siblings inactive
      .siblings().removeClass("active")
    ;

    $section
      // Remove the hidden property
      .removeClass("hidden-opacity")
      // Make all of the other sections hidden
      .siblings(".section.dynamic").addClass("hidden-opacity")
    ;

    // Set the new wrapper height
    var newHeight = WRAPPER_OFFSET + HEADER_HEIGHT + $section.outerHeight();
    $innerWrapper.css("height", newHeight);

  });

  // Easy init
  $("li[data-section=education]").trigger("click");
});
