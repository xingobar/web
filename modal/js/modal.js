$(document).ready(function(){
	var modal = $("#modal");
	var openModal  = $("#openModal");
	var close = $('.close');
	openModal.on('click',function(){
		modal.css('display','block');
	});

	close.on('click',function(){
		modal.css('display','none');
	});
	/// click anywhere outside of modal , close it 
	window.onclick = function(event){
		if(event.target == modal){
			modal.css('display','none');
		}
	};
});