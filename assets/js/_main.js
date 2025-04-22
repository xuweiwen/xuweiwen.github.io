/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // Sticky footer
  // var bumpIt = function() {
  //     $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  //   },
  //   didResize = false;

  // bumpIt();

  // $(window).resize(function() {
  //   didResize = true;
  // });
  // setInterval(function() {
  //   if (didResize) {
  //     didResize = false;
  //     bumpIt();
  //   }
  // }, 250);

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 925 : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      $(".author__urls").show();
    } else {
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

});
