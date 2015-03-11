$(document).ready(function() {
  console.log( "document ready" );  
  var balance;
  balance = 0;
  var savbalance;
  savbalance = 0;

  $("#balance").click(function() {
      // show the balance in the message area
      $("#message").text("Your Checking balance is: $" + balance.toString() + " and your Saving Balance is: $" + savbalance.toString());      
      
  });
  
  
  $("#deposit").click(function() {
     var amount = parseFloat($("#d_amount").val());
     console.log( amount.toString() );  
     balance = balance + amount;
     // show the results in the message area
     $("#message").text("Thank you for your deposit!");   
     $("#message2").text("Your Checking balance is: $" + balance.toString() + " and your Saving Balance is: $" + savbalance.toString());  
  });
  
  $("#withdraw").click(function() {
    var amount = parseFloat($("#w_amount").val());
    console.log( amount.toString() );  
    if (amount > balance) {
      $("#message").text("You don't have enough money!"); 
    }
    else {
      // show the results in the message area
      balance = balance - amount;
      $("#message").text("Withdrawal complete.  Thank you for your business!"); 
    }
  });
    
   $("#tran2sav").click(function() {
    var amount = parseFloat($("#ts_amount").val());
    console.log( amount.toString() );  
    if (amount > balance) {
      $("#message").text("You don't have enough money!"); 
    }
    else {
      // show the results in the message area
      balance = balance - amount;
      savbalance = savbalance + amount
      $("#message").text("Transfer to Savings is complete.  Thank you for your business!"); 
    }
  });
  
   $("#tran2ck").click(function() {
    var amount = parseFloat($("#tc_amount").val());
    console.log( amount.toString() );  
    if (amount > savbalance) {
      $("#message").text("You don't have enough money in savings!"); 
    }
    else {
      // show the results in the message area
      balance = balance + amount;
      savbalance = savbalance - amount
      $("#message").text("Transfer to Savings is complete.  Thank you for your business!"); 
    }
  });
  
   
  
});