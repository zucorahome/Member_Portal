$(document).ready(function(){

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
      getHeight();
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
  	  getHeight();
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
  	// console.log("get height called");
    var newHeight = $(document).height();
    $('.address-modal').css({'height':newHeight});
  }

  $(window).resize(getHeight);

  getHeight();

  // faq screen

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


var faqLinks = $('.category-box').find('a');
for(i=0;i<faqLinks.length;i++){
	$(faqLinks[i]).click(function(){
			var id= $(this).attr('id');
			var showClass = '.faq-'+id;
			// console.log(id, showClass);
			$(showClass).toggle(1000);
			$('html,body').animate({
				scrollTop:$(showClass).offset().top - 200,
			},1000, 'linear');
		});
	}

// New Additions on redeem points page.
 $('.giftCard-redeem-button').bind('click',{key:'.giftCard-redeem-modal-container'},openModal);
 $('.giftCard-redeem-modal .purple-heading-background .cross-modal').bind('click',{key:'.giftCard-redeem-modal-container'},closeModal);

// To send the gift card t friend's email
let giftCheckbox = $('.send-giftCard').find('input[type="checkbox"]');

giftCheckbox.change(function(){
    if(giftCheckbox.is(':checked')){
        $('.sendGiftCard-modal-container').removeClass('non-visible');

  }else{
     $('.sendGiftCard-modal-container').addClass('non-visible');
  }
});

// To close send to friend email box modal

$('.sendGiftCard-modal .purple-heading-background .cross-modal').bind('click',{key:'.sendGiftCard-modal-container'},closeModal);

// When clicked on checkout in giftcard redeem
$('.giftCard-checkout').bind('click',{key:'.giftCardConfirmation-modal-container'},openModal);

$('.close-confirmationGiftCardModal').click(function(){
  $('.giftCardConfirmation-modal-container').addClass('non-visible');
});

});