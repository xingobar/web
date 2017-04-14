$(document).ready(function(){
	imageModal();
	closeModal();
});

function closeModal(){
	$('.close').click(function(){
		$('.modal').css('display','none');
	});	
}

function imageModal(){
	var image = $('#image');
	var modal = $('.modal');
	var modalImg = $("#image01");
	var caption = $("#caption");
	image.click(function(){
		modal.css('display','block');
		modalImg.attr('src',this.src);
		caption.innerHTML  = this.alt;
	})	
}



