$("#description-design").hide();
$("#description-development").hide();
$("#description-product-management").hide();


$("#design").on("click", function () {
  $("#design").hide();
  $("#description-design").toggle();
});
$("#development").on("click", function () {
  $("#development").hide();
  $("#description-development").toggle();
});
$("#product-management").on("click", function () {
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
