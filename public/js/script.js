// Toggle Education Information
$(".buttonDiv button").click(function(){
  if($(".educationMore").is(":visible")){
    $(".buttonDiv button").text("Learn More");
    $(".educationMore").slideToggle();
  }
  else{
    $(".buttonDiv button").text("Hide Information");
    $(".educationMore").slideToggle();
  }

});
// Scroll down from landing Area
$(".scrollDown").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".navbar").offset().top
    }, 2000);
});
// Scroll to landing Area
$(".navbar-brand").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".landing").offset().top
    }, 2000);
});

//Scroll to AboutMe Area
$(".1").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".aboutMe").offset().top
    }, 2000);
});

// Scroll to Education Area
$(".2").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".education").offset().top
    }, 2000);
});

$(".3").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".skills").offset().top
    }, 2000);
});
$(".4").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".projects").offset().top
    }, 2000);
});

$(".5").click(function(){
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".contact").offset().top
    }, 2000);
});



// Animate scroll down button

$(".scrollDown").hover(function(){

    $(".scrollDown img").animate({bottom:"-=15px"},500,"linear");
    $(".scrollDown img").animate({bottom:"+=15px"},500,"linear");
},function(){

});

// Show More Info projects
$(".projectsMoreBtn").click(function(){
  if($(".projectsMoreTxt").is(":visible")){

    $(".projectsMoreBtn").text("+");

    $(".projectsMoreTxt").slideToggle();
  }
  else{
    $(".projectsMoreBtn").text("-");

    $(".projectsMoreTxt").slideToggle();
  }

});
// Detect which section is displayed in the screen
var $window = $(window);
var $animation_elements = $('.animation-element');

function check_if_in_view() {

  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);


  $.each($animation_elements, function() {

    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      if($element.hasClass("aboutMe")){
        $(".1").addClass('in-view');

      }
      else if($element.hasClass("education")){
        $(".1").removeClass('in-view');
        $(".2").addClass('in-view');

      }
      else if($element.hasClass("skills")){
        $(".2").removeClass('in-view');
        $(".3").addClass('in-view');

      }
      else if($element.hasClass("projects")){
        $(".3").removeClass('in-view');
        $(".4").addClass('in-view');

      }
      else if($element.hasClass("contact")){
        $(".4").removeClass('in-view');
        $(".5").addClass('in-view');

      }
    } else {
      if($element.hasClass("aboutMe")){
        $(".1").removeClass('in-view');

      }
      else if($element.hasClass("education")){
        $(".2").removeClass('in-view');

      }
      else if($element.hasClass("skills")){
        $(".3").removeClass('in-view');

      }
      else if($element.hasClass("projects")){
        $(".4").removeClass('in-view');

      }
      else if($element.hasClass("contact")){
        $(".5").removeClass('in-view');

      }
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
