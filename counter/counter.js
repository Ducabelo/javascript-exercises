let decrease = document.querySelector("#decrease");

let increase = document.querySelector("#increase");

let initialValue = 0;

decrease.addEventListener("click", decreaseNumber);

increase.addEventListener("click", increaseNumber);


function decreaseNumber(number){

  number = 1;

  document.getElementById('number').textContent -= initialValue + 1;
  
}


function increaseNumber(){

  number = 1;

  document.getElementById('number').textContent -= initialValue - 1;

}
