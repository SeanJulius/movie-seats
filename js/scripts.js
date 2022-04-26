//Business Logic
function Ticket(age, title, time){
  this.title = title;
  this.time = time;
  this.rating = age;
  this.price = 15;
}
Ticket.prototype.translation = function(time){
  if (time === 1){
    return "Afternoon Matinee"
  }else if (time === 2){
    return "Evening Show"
  }else {
    return "Late Night Showing"
  }
}
Ticket.prototype.calculation = function(age, time, price) {
  let ticketCost = 0;
  if (age <= 17){
    price -= 5;
  }else if ((age >= 18) && (age <= 64)){
    price;
  }else {
    price -= 7;
  }if (time === 1) {
    price -= 2;
  }else {
    price;
  }return ticketCost += price;
}
function resetFields() {
  $("input#age").val("");
}

//User Interface Logic
$(document).ready(function(){
  $("#ticketInput").submit(function(event){
    $("#ticketInput").hide();
    $(".panel").show();
    let ageInput = parseInt($("input#age").val());
    let titleInput = $("#movie-title").val();
    let timeInput = parseInt($("#movie-times").val());
    let newTicket = new Ticket(ageInput, titleInput, timeInput);
    let cost = newTicket.calculation(ageInput, timeInput, newTicket.price);
    newTicket.price = cost;
    let showing = newTicket.translation(timeInput);
    $("#ticket").append(`<li>${titleInput}</li>`);
    $("#ticket").append(`<li>${showing}</li>`);
    $("#ticket").append(`<li>$${cost}</li>`);
    event.preventDefault();
  });
});
