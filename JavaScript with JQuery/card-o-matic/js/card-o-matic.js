/* This is the color picker function */
$('.colors').click(function() {
    // Figure out which color we should use
    // Store the results in a variable
    var chosen_color = $(this).css('background-color');
    
    // Change the background color of the canvas using the variable we just set
    $('#canvas').css('background-color', chosen_color);
    
    // BONUS! Also change the texture choices
    $('.texture').css('background-color', chosen_color);
});

/* This is the texture picker function */
$('.textures').click(function() {
    // Figure out which texture to use
    // Store the results in a variable
    var image = $(this).css('background-image');
    
    // Change the background texture of the canvas using the variable we just set
    $('#canvas').css('background-image', image);
});

/* This is the message picker function */
/* $('.messages').click(function() {
    // Figure out which radio button was clicked
    // And put the whole element in a variable
    var radio_button = $(this);
    
    // What label is next to this radio button?
    var label = radio_button.next();
    
    //Now that the label is known, get the text inside it
    var messagetext = label.html();
    
    // Inject the message into the card
    $('#message-output').html(messagetext);
}); */

/* This gets the recipient name from the input where the user types it */
/* $('#recipient').keyup(function() {
    // .val will tell us what was input into #recipient
    var name = $(this).val();
    
    // Now show it on the card
    $('#recipient-output').html(name);
    
    // let's check the length to make sure it isn't too long
    var name_length = name.length;
    
    // 14 characters is max, so show an error message
    if(name_length == 14) {
        $('#recipient-error').html("Max characters: 14");
    }
    // Otherwise it's fine so clear the error message
    else {
        $('#recipient-error').html("");
    } 
}); */

/* This gets the sticker and copies it onto the card */
/* $('.stickers').click(function() {
    // Clone the clicked sticker
    var new_sticker = $(this).clone();
    
    // Give all stickers on the card the same class so we can absolutely position them
    new_sticker.addClass('stickers_on_card');
    
    // Inject the new sticker into the canvas
    $('#canvas').prepend(new_sticker);
    
    // Make the new sticker draggable and set the
    // "containment" option to be the #canvas div
    // so that the stickers can't be dragged outside the card
    new_sticker.draggable({containment: '#canvas' opacity: 0.35});
}); */
