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

//Make hide and show a section
function toggleClassMethod(className){
	$(className.data.key).toggleClass('non-visible');
}

function toggleMethod(className){
	$(className.data.key).toggle(1000);
}

$('#change-password').bind('click', {key:'.password-field'},toggleClassMethod);

// check if radio button is checked
 function radioText(){
 	let radioContainer = $('.radio-container');
 	let inputRadio = $('input[type=radio]');
 	
 	for(i=0;i<inputRadio.length;i++){

 		if($(inputRadio[i]).is(':checked')){
 			$(radioContainer[i]).removeClass('light-grey');
 		}else{
 			$(radioContainer[i]).addClass('light-grey');
 		}
 	}
 }

$('input[type=radio]').change(radioText);
  radioText();

  // address screen
  function openModal(className){
    $(className.data.key).removeClass('non-visible');
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

  function closeModal(className){
    $(className.data.key).addClass('non-visible');
  }

  $('.edit-link').bind('click',{key:'.address-modal'},openModal);
  $('.cross-close').bind('click',{key:'.address-modal'},closeModal);

  // Payment options screen

  function openInfo(e){
  	e.preventDefault();
  	var $this = $(this);
  	$this.next().toggle(1000);
  	$("i",this).toggleClass("fa-chevron-up fa-chevron-down");
  }

  $('.paymentCard-name').click(openInfo);

  $('.showForm').click(openInfo);
  $('.showForm').click(function(){$('.selectAddress-box').hide()});

  // Show address field options
  $('.addCard-link').bind('click', {key:'.selectAddress-box'},toggleMethod);

  $('.chevron').click(function(){
  	var $this = $(this);
  	$this.parent().next().toggle(500);
  	$this.parent('div').toggleClass("detailsPane-open detailsPane-closed");
  	$("i",this).toggleClass("fa-chevron-up fa-chevron-down");
  });


  // Transaction History screen

  $('.show-table').click(function(){
    var $this = $(this);
    $this.parent().parent().next().toggle(1000);
    $("i",this).toggleClass("fa-chevron-up fa-chevron-down");
  });

  //Redeem screen

  function showcard(){
    var cardChecked = $('input[name=giftcard-choice]:checked').val();

    if(cardChecked == 'Retailer card'){
      $('.zucoraCard-block').hide(1000);
      $('.retialerCard-block').show(1200);
    }else{
       $('.retialerCard-block').hide(1000);
        $('.zucoraCard-block').show(1200);
       
    }
  }

  showcard();
  $('input[type=radio]').change(showcard);

  function getHeight(){
    var newHeight = $(document).height();
    // console.log(newHeight);
    $('.address-modal').css({'height':newHeight});
  }

  $(window).resize(getHeight);

  getHeight();
});