$('.calculator--choise_yes').change(function () {
	if ($('input').is(":checked")) {
		$('.calculator--button_yes').addClass('calculator--button-active');
		$('.calculator--button_no').removeClass('calculator--button-active');
	}
});
$('.calculator--choise_no').change(function () {
	if ($('input').is(":checked")) {
		$('.calculator--button_no').addClass('calculator--button-active');
		$('.calculator--button_yes').removeClass('calculator--button-active');
	}
});
$('.calculator--item_2 input').change(function () {
	if ($('.calculator--item_2 input').is(":checked")) {
		$('.calculator--button').addClass('calculator--button-active');
	} else {
		$('.calculator--button').removeClass('calculator--button-active');
	}
});



$('.calculator--button_yes').click(function () {
	$('.calculator--item_2').addClass('calculator--item_2-active');
	$('.calculator--item_1').removeClass('calculator--item_1-active');
});
//$('.calculator--item_2 .button').click(function () {
//	$('.calculator--item_3').addClass('calculator--item_3-active');
//	$('.calculator--item_2').removeClass('calculator--item_2-active');
//});
//$('.calculator--item_3 .button').click(function () {
//	$('.calculator--item_4').addClass('calculator--item_4-active');
//	$('.calculator--item_3').removeClass('calculator--item_3-active');
//});