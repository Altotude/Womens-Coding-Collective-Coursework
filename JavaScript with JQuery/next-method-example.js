$('.messages').click(function() {
    // which radio button was clicked?
    // note that the entire element is stored in the variable
    var radio_button = $(this);
    
    // what is the label next to the button?
    var label = radio_button.next();
    
    // now that the label is known, get the text inside it, which is the messge
    var message = label.html();
});