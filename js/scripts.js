let container = document.querySelector(".container");
let seats = document.querySelectorAll(".row .seat:not(.occupied)");
let count = document.getElementById("count");
let total = document.getElementById('total');
let movieSelect = document.getElementById("movie");

populateUI();

let ticketPrice = +movieSelect.value;

//Save movie and ticket Price
function setMoveData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

//Update count and total
function updateSelectedCount() {
  let selectedSeats = document.querySelectorAll(".row .seat.selected");
  let seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem("selectedSeats", toString(seatsIndex));
  let selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// local storage and populate UI

function populateUI() {
  let selectedSeats = parseInt(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  let selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//select movie

container.addEventListener("click", e => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

//count and total

updateSelectedCount();
