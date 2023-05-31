$('.js-serv-reviews').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1
});
$('.js-serv-reviews-mob').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true
});

$('.serv-possibilities__item-lnk-mob').on('click', function(event){
    $(this).toggleClass('open');
});
$('.serv-possibilities__item-dop-title').on('click', function(event){
    $(this).toggleClass('open');
});



settings = {
    objModalPopupBtn: ".modalButton",
    objModalCloseBtn: ".overlay, .modal-close",
    objModalDataAttr: "data-popup"
}
$(settings.objModalPopupBtn).bind("click", function () {
    if ($(this).attr(settings.objModalDataAttr)) {

        var strDataPopupName = $(this).attr(settings.objModalDataAttr);


        $(".overlay, #" + strDataPopupName).fadeIn();

    }
});

$(settings.objModalCloseBtn).bind("click", function () {
    $(".modal").fadeOut();
});


$('.status-items').slick({
    dots: false,
    arrows: false,
    infinite: false,
	adaptiveHeight: true,
    slidesToShow: 3,
	responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1
		  }
		},
	]
});
$('.status-items-nav__item--prev').click(function(){
    $(".status-items").slick('slickPrev');
});
$('.status-items-nav__item--next').click(function(){
    $(".status-items").slick('slickNext');
});
$('.minus').on('click',function () {
   let value = $(this).parent().find('.counter-inp__inp').val();
   if(value > 1) {
       value--;
       $(this).parent().find('.counter-inp__inp').val(value);
   }
});
$('.plus').on('click',function () {
   let value = $(this).parent().find('.counter-inp__inp').val();
   value++;
   $(this).parent().find('.counter-inp__inp').val(value);
});

$('.toggle-menu-btn').on('click', function() {
	$(this).toggleClass('active')
	$('.toggle-menu').toggleClass('show');
});