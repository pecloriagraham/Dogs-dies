$("img").click(function() {
    $(".meow") .text("The dog says Meow Meow Meow");
});
$("h1").click(function() {
    $(".cats").show();
   // $("body").css("background-color", "red");
});
    $(".cats").hide();
$(".cats").click(function() {
    $(".stop").show();
});
$(".stop").hide();
$(".stop").click(function() {
    $(".pills").toggled();
});
 
 
 $(".orange").click(function() {
     $(".orange").show();
 });
  $(".orange").hide();
 $(".yellow").click(function() {
     $(".yellow").show();
 });
  $(".yellow").hide();
 $(".red").click(function() {
     $(".red").show();
 });
 $(".red").hide();