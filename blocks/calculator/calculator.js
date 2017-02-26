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
		$('.calculator--item_2 .button').addClass('calculator--button-active');
	} else {
		$('.calculator--item_2 .button').removeClass('calculator--button-active');
	}
});
$('.calculator--item_3 input').change(function () {
	if ($('.calculator--item_3 input').is(":checked")) {
		$('.calculator--item_3 .button').addClass('calculator--button-active');
	} else {
		$('.calculator--item_3 .button').removeClass('calculator--button-active');
	}
});
$('.calculator--item_4 input').change(function () {
	if ($('.calculator--item_4 input').is(":checked")) {
		$('.calculator--item_4 .button').addClass('calculator--button-active');
	} else {
		$('.calculator--item_4 .button').removeClass('calculator--button-active');
	}
});
$('.calculator--item_5 input').change(function () {
	if ($('.calculator--item_5 input').is(":checked")) {
		$('.calculator--item_5 .button').addClass('calculator--button-active');
	} else {
		$('.calculator--item_6 .button').removeClass('calculator--button-active');
	}
});
$('.calculator--item_6 input').change(function () {
	if ($('.calculator--item_6 input').is(":checked")) {
		$('.calculator--item_6 .button').addClass('calculator--button-active');
	} else {
		$('.calculator--item_6 .button').removeClass('calculator--button-active');
	}
});
$('.calculator--item_7 input').change(function () {
	if ($('.calculator--item_7 input').is(":checked")) {
		$('.calculator--item_7 .button').addClass('calculator--button-active');
	} else {
		$('.calculator--item_7 .button').removeClass('calculator--button-active');
	}
});
$('.calculator--item_8 input').change(function () {
	if ($('.calculator--item_8 input').is(":checked")) {
		$('.calculator--item_8 .button').addClass('calculator--button-active');
	} else {
		$('.calculator--item_8 .button').removeClass('calculator--button-active');
	}
});



$('.calculator--button_yes').click(function () {
	$('.calculator--item_2').addClass('calculator--item_2-active');
	$('.calculator--number').text('02/');
	$('.calculator--item_1').removeClass('calculator--item_1-active');
});
$('.calculator--item_2 .button').click(function () {
	$('.calculator--item_3').addClass('calculator--item_3-active');
	$('.calculator--number').text('03/');
	$('.calculator--item_2').removeClass('calculator--item_2-active');
});
$('.calculator--item_3 .button').click(function () {
	$('.calculator--item_4').addClass('calculator--item_4-active');
	$('.calculator--number').text('04/');
	$('.calculator--item_3').removeClass('calculator--item_3-active');
});
$('.calculator--item_4 .button').click(function () {

});
$('.calculator--button_no').click(function () {
	$('.calculator--item_5').addClass('calculator--item_5-active');
	$('.calculator--number').text('02/');
	$('.calculator--item_1').removeClass('calculator--item_1-active');
});
$('.calculator--item_5 .button').click(function () {
	$('.calculator--item_6').addClass('calculator--item_6-active');
	$('.calculator--number').text('03/');
	$('.calculator--item_5').removeClass('calculator--item_5-active');
});
$('.calculator--item_6 .button').click(function () {
	$('.calculator--item_7').addClass('calculator--item_7-active');
	$('.calculator--number').text('04/');
	$('.calculator--item_6').removeClass('calculator--item_6-active');
});

// Логика


$("input").click(function () {
	
	//Да
	var sumItem_2 = 0;
	var sumItem_3 = 0;
	
	$(".calculator--item_2 input:checked").each(function () {
		sumItem_2 += +$(this).val();
	});
	$(".calculator--item_3 input:checked").each(function () {
		sumItem_3 += +$(this).val();
	});

	//Нет
	var sumItem_5 = 0;
	var sumItem_6 = 0;

	$(".calculator--item_5 input:checked").each(function () {
		sumItem_5 += +$(this).val();
	});

	$(".calculator--item_5 #choise_19:checked").each(function () {
		sumItem_5 = 10000;
	});
	$(".calculator--item_6 input:checked").each(function () {
		sumItem_6 += +$(this).val();
	});
	
	var totalSum = sumItem_2 * sumItem_3 || sumItem_5 + sumItem_6;
	
	$('.result--sum').text(totalSum + ' ₽');
});