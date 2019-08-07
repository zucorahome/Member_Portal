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
	console.log("clicked");
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
});