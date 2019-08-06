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
	$('input[type="radio"]').change(function(){
		if($('.radio-container').attr('checked')){
			console.log("found the checked one");
		}else{

		}
	});
});