import $ from 'jquery'
import 'slick-carousel'

$('.comments__list').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				dots: true,
				slidesToShow: 2,
				adaptiveHeight: true,
			}
		},
		{
			breakpoint: 769,
			settings: {
				arrows: false,
				dots: true,
				slidesToShow: 1,
				adaptiveHeight: true,
			}
		},
	]
})


