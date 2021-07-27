// what-we-do functions

$("#description-design").hide();
$("#description-development").hide();
$("#description-product-management").hide();


$("#design").on("click", function() {
  $("#design").hide();
  $("#description-design").toggle();
});
$("#development").on("click", function() {
  $("#development").hide();
  $("#description-development").toggle();
});
$("#product-management").on("click", function() {
  $("#product-management").hide();
  $("#description-product-management").toggle();
});
$("#description-design").on("click", function() {
  $("#design").show();
  $("#description-design").hide();
});
$("#description-development").on("click", function() {
  $("#development").show();
  $("#description-development").hide();
});
$("#description-product-management").on("click", function() {
  $("#product-management").show();
  $("#description-product-management").hide();
});

// portfolio-images
$(document).ready(function() {
  $("#blackness").hover(function() {
    $(".image4-description").addClass("black-description");
  }, function() {
    $(".image4-description").removeClass("black-description");
  });
  $("#mightyOntario").hover(function() {
    $(".image3-description").addClass("black-description");
  }, function() {
    $(".image3-description").removeClass("black-description");
  });
  $("#Orange-prism").hover(function() {
    $(".image2-description").addClass("black-description");
  }, function() {
    $(".image2-description").removeClass("black-description");
  });
  $("#aboutMovies").hover(function() {
    $(".image1-description").addClass("black-description");
  }, function() {
    $(".image1-description").removeClass("black-description");
  });
  $("#goodDay").hover(function() {
    $(".image5-description").addClass("black-description");
  }, function() {
    $(".image5-description").removeClass("black-description");
  });
  $("#wordPress").hover(function() {
    $(".image6-description").addClass("black-description");
  }, function() {
    $(".image6-description").removeClass("black-description");
  });
  $("#burnedLogo").hover(function() {
    $(".image7-description").addClass("black-description");
  }, function() {
    $(".image7-description").removeClass("black-description");
  });
  $("#baileyWonger").hover(function() {
    $(".image8-description").addClass("black-description");
  }, function() {
    $(".image8-description").removeClass("black-description");
  });
});

// contact-us-section

  function messageRecieved(name, email, message) {
    name = $("#nameEntered").val();
    email = $("#email").val();
    message = $("#message").val();
    if (name != 0 && email != 0 && message != 0) {
      return alert("Message recieved, " + name + ". Thank you. Have a good one!" );
    }
    else {
      return alert("Please ensure you filled in all the required fields");
    }
  }
