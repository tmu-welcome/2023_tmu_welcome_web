$(document).ready(function() { 
	$(function(){
		var $isScrolling = 0 ;
		var $timeoutId ;

		$(document).on( "scroll", function () {
			$isScrolling = 1 ;

		// スクロールを停止して200ms後に終了とする
		clearTimeout( $timeoutId );

		$timeoutId = setTimeout( function () {
			$isScrolling = 0 ;
		}, 200 );
		});
	});

	var clickEventType = (( window.ontouchstart!==null ) ? 'click':'touchend');
	var css = '.mapplic-filtered svg [id^=landmark] > * {opacity: 1 !important; }';
	var map_f = $('#mapplic_f').mapplic({
		source: 'map_f.json',
		customcss: css,
		sidebar: true,
		sidebartoggle: true,
		alphabetic: true,
		height: 'auto',
		developer: false,
		searchdescription: true,
		searcheverywhere: true,
		animations: true,
		minimap: true,
		marker: 'hidden',
		fillcolor: false,
		fullscreen: false,
		thumbholder: true,
		maxscale: 3
	});

	var self_f = map_f.data('mapplic');

	$(document).on(clickEventType, '#infome-building1f', function (e) {
		e.preventDefault();
		self_f.switchLevel('floor-1-1-first');
	});
	
	$(document).on(clickEventType, '#infome-building7f', function (e) {
		e.preventDefault();
		self_f.switchLevel('floor-7-1-first');
	});

	$(document).on(clickEventType, '#infome-hallf', function (e) {
		e.preventDefault();
		self_f.switchLevel('hall');
	});

	$(document).on(clickEventType, '#hall-building1', function (e) {
		e.preventDefault();
		self_f.switchLevel('floor-1-1-first');
	});


	var map_s = $('#mapplic_s').mapplic({
		source: 'map_s.json',
		customcss: css,
		sidebar: true,
		sidebartoggle: true,
		alphabetic: true,
		height: 'auto',
		developer: false,
		searchdescription: true,
		searcheverywhere: true,
		animations: true,
		minimap: true,
		marker: 'hidden',
		fillcolor: false,
		fullscreen: false,
		thumbholder: true,
		maxscale: 3
	});

	var self_s = map_s.data('mapplic');

	$(document).on(clickEventType, '#infome-building1s', function (e) {
		e.preventDefault();
		self_s.switchLevel('floor-1-1-second');
	});

	$(document).on(clickEventType, '#infome-building7s', function (e) {
		e.preventDefault();
		self_s.switchLevel('floor-7-1-second');
	});


	$(document).on(clickEventType, '#infome-halls', function (e) {
		e.preventDefault();
		self_s.switchLevel('hall');
	});

	$(document).on(clickEventType, '#hall-building1', function (e) {
		e.preventDefault();
		self_s.switchLevel('floor-1-1-second');
	});
});
