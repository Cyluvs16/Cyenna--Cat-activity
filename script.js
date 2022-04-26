
$(".Part-two-yes").hide();
$(".Part-two-no").hide();
$(".Ending-yes").hide();


$(".yes-button").click(function() {
$(".Part-two-yes").show();
$(".start").hide();
});


$(".no-button").click(function() {
$(".Part-two-no").show();
$(".start").hide();
});


$(".secondImage").hover(function() {
$(".Ending-yes").show();
$(".Part-two-yes").hide();
});


$(".lastImage").dblclick(function() {
$(".Ending-yes").css("background-color","yellow");
$(".last-message").text("You found the secret prize!");   
$(".lastImage").attr("src","https://preview.redd.it/0a0d6zeo8wg11.jpg?auto=webp&s=40689259d3b803b80a137db778b3c18b403e2c96");
$("h2").hide();
$("h3").hide();

});