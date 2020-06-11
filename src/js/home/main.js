

		//------- jquery preloader------

   
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(450).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(450).css({'overflow':'visible'});
        });
   
	// jquery for project
	
		$('a.all-works').click(function(e){
		  e.preventDefault();
		  var $this = $(this);
		  $this.toggleClass('a.all-works');
		  if($this.hasClass('a.all-works')){
			$this.text('View less work'); 
		  } else {
			$this.text('see all work');
		  }
		});

		$('a.all-works').click(function(){
		  $('.project-area .hide-project').toggle();
		});
	
	
		//------for nice scroll 
	
	(function($){
        $("html").niceScroll({
            cursorborder:"",
            cursorcolor:"#00F",
            boxzoom:false,
            scrollspeed:60,
            cursorcolor: "rgb(0, 158, 227)",
            cursorwidth: "5px",
            zindex: "9999999",
            mousescrollstep:40,
            enablemousewheel: true,
        });
   })(jQuery);
   
   
   //-----scrollup jquery
   
   	 $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 1500,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'slide',           // Fade, slide, none
        animationSpeed: 500,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: 'Top', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });
	
		

	 //for animated
	 new WOW().init();

function contact(name,email,subject,message){

    var date = new Date().toUTCString();

    firebase.database().ref('message/'+date).set({Name: name, Email: email, Subject: subject, Message: message});

    swal("Message Sent !", "Your message sent successfully!", "success");

}

function contact_validation() {

    var contact_name = document.getElementById('contact_name');
    var contact_name_value = contact_name.value.trim();
    var contact_name_len = contact_name_value.length;

    var contact_email = document.getElementById('contact_email');
    var contact_email_value = contact_email.value.trim();
    var contact_email_len = contact_email_value.length;

    var contact_subject = document.getElementById('contact_subject');
    var contact_subject_value = contact_subject.value.trim();
    var contact_subject_len = contact_subject_value.length;


    var contact_message = document.getElementById('contact_message');
    var contact_message_value = contact_message.value.trim();
    var contact_message_len = contact_message_value.length;

    if (contact_name_len == 0)
    {
        swal("Warning !", "Your name can not be empty!", "warning");
        contact_name.focus();
        return false;

    }
    else if(contact_email_len == 0){

        swal("Warning !", "Your email can not be empty!", "warning");
        contact_email.focus();
        return false;

    }
    if (contact_subject_len == 0)
    {
        swal("Warning !", "Your subject can not be empty!", "warning");
        contact_subject.focus();
        return false;

    }
    else if(contact_message_len == 0)
    {
        swal("Warning !", "Contact message content cannot be empty!", "warning");
        contact_message.focus();
        return false;

    }
    else
    {
        contact(contact_name_value,contact_email_value,contact_subject_value,contact_message_value);
    }

    return true;
}