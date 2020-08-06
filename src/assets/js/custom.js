jQuery(document).ready(function(){
  jQuery(".show-hide-btn").click(function(){
    jQuery(".more-items").slideToggle();
	jQuery(this).text( jQuery(this).text() == 'More' ? "Show Less" : "More"); // using ternary operator.
  });
});

function movetoNext(current, nextFieldID) {  
if (current.value.length >= current.maxLength) {  
document.getElementById(nextFieldID).focus();  
}  
}  
