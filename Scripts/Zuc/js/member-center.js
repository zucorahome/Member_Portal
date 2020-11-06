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
  	var $this = $(this).parents(".paymentCard-name");
  	$this.next().toggle(1000);
  	$(this).toggleClass("fa-chevron-up fa-chevron-down");
  	  getHeight();
  }

  // $('.paymentCard-name').click(openInfo);
  $('.show-cardInfo').click(openInfo);

  function openForm(e){
      e.preventDefault();
      var $this = $(this);
      $this.next().toggle(1000);
      $("i",this).toggleClass("fa-chevron-up fa-chevron-down");
      getHeight();
  }

  $('.showForm').click(openForm);

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


//New welcome screen js code.
 
 $('.show-successModal').click(function(){
    $('.becomeMember-form-success').show(1000);
    $('.becomeMember-form-container').hide(1000);
 });

 // $('.becomeMember-close-modal').click(function(){
 //  $(this).parent().closest('div .becomeMember-form-success').parent().closest('div').toggleClass('zuc-modal-active');
 // });

  $('.becomeMember-close-modal').click(function(){
    $('.becomeMember-form-success').hide();
    $('.becomeMember-form-container').show();
    $('.becomeMember-form-container').parent('div').removeClass('zuc-modal-active');
  });

//rotating images

//howeever number of circle class is it will change that many times.
let totalCircles = $('.circle');
let welcomeScreenProducts = ['../../Images/Zuc/images/member-portal/Zensory.png','../../Images/Zuc/images/member-portal/Celliant.png','../../Images/Zuc/images/member-portal/Frio.png','../../Images/Zuc/images/member-portal/Appliances.png'];
let index = 0;
function rotateImage(){

  $('.product-imageGallery').fadeOut('slow',function(){
    $(this).attr('src',welcomeScreenProducts[index]);

    $(this).fadeIn('slow',function(){
      if(index == welcomeScreenProducts.length-1)
      {
        index = 0;
        $(totalCircles[index]).addClass('filled-color');
        $(totalCircles[welcomeScreenProducts.length-1]).removeClass('filled-color')
      }
      else
      {
        index++;
        $(totalCircles[index]).addClass('filled-color');
        $(totalCircles[index - 1]).removeClass('filled-color');
      }
    });
  });
}

setInterval(rotateImage,3000);

});