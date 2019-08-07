$(document).ready(function(){

// console.log("DOM function called");
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  	this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$('#change-password').click(function(){
	$('.password-field').toggleClass('non-visible');
});

// check if radio button is checked
 function radioText(){
  $('input[type=radio]').parent().addClass('light-grey');
    // if($('input[type=radio]').is(':checked')){
      if($("input[type=radio][checked]")){
      $(this).parent().removeClass('light-grey');
    }
 }

	$('input[type=radio]').change(radioText);

  radioText();

  // address screen

  function openModal(){
    $('.address-modal').removeClass('non-visible');
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

  function closeModal(className){
    $('.address-modal').addClass('non-visible');
  }

  $('.edit-link').click(openModal);
  $('.cross-close').click(closeModal);

  // Payment options screen
  $('.addCard-link').click(function(){

  	// $('.selectAddress-box').toggleClass("non-visible", 1500);
  	$('.selectAddress-box').toggle(1000)
  });

  // $('.chevron').click(function(){
  // 	$(this).each
  // 	$('.paymentCard-info').toggle(1000);
  // 	$("i",this).toggleClass("fa-chevron-up fa-chevron-down");
  // });

$('.chevron').each(function(){
	$(this).click(function(){
		$('.paymentCard-info').toggle(1000);
  		$("i",this).toggleClass("fa-chevron-up fa-chevron-down");
	});
});

  // var chevron = $('.chevron');

  // var i;


  // for(i=0;i<chevron.length;i++){
  // 	console.log(chevron[i],i);
  // 	chevron[i].click(function(){
  // 		console.log("function called");
  // 	});	
  	
  // }

});