

$('img.enlarge').click(function(ev) {
	var $img = $(ev.currentTarget).clone();

	var $box = $('<div>').addClass('mybox');

	var $img2 = $('<img>').prop('src', $img.prop('src'));

	$box.append($img2);

	$box.appendTo(document.body);

	$box.click(function() {
		$box.remove();
	});
});