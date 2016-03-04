// OK, so for the sake of this example, the subtotal is 100
var subtotal = 100;

// And the sales tax is 9%
var sales_tax = .09;

// Calculate the tax amount by multiplying the subtotal by the tax value
var tax = subtotal * sales_tax;

// Calculate the grand total by adding the subtotal and tax amount
var total = subtotal + tax;

// Print the results by concatenating (joining together) a string ("Your total:") and the variable called total.
$('#results').html("Your total:" + total);
