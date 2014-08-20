$(document).ready(function(){


$('#navBar a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});
$('#aboutUsTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});
$('#brothersTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});
$("#tab1").tab('show');
$('.carousel').carousel();

$("#tab2").tab('show');
$("#tab3").tab('show');

$('#sophmoresCarousel').carousel();
$('#juniorsCarousel').carousel();
$('#seniorCarousel').carousel();

});