// Cálculo de pontos na CNH por velFinal de velocidade.
const btn = document.querySelector("#form");

const btn2 = document.querySelector("#limpar");

const veloc = document.querySelector("#veloc");  

const velPerm = 70;



btn.addEventListener("click", cnhPoints);

function cnhPoints(e){

  e.preventDefault();

  let velVeic = veloc.value;
  
  let velFinal = velVeic - velPerm;
  
  var pontos = Math.floor(velFinal / 5);

  if (velVeic == false || isNaN(velVeic)){
    alert('Digite um valor válido');
  }
  else if (velVeic > 180){
    alert('Digite um valor válido')
  }
  else if (velFinal > 1 && pontos < 12) {
    document.getElementById("result").innerHTML =  'Você excedeu a velocidade em '+ velFinal + 'km/h. Você recebeu '+ pontos + ' pontos na sua carteira. <br/> Permissão para dirigir continua a vigorar.';
    btn.style.visibility = "hidden";
    btn2.style.visibility = "visible"

  }
  else if (pontos >= 12){
    document.getElementById("result").innerHTML = 'Você excedeu a velocidade em '+ velFinal + 'km/h. Você recebeu '+ pontos + ' pontos na sua carteira.<br/><span class="alert"> Habilitação caçada!</span>';
    btn.style.visibility = "hidden";
    btn2.style.visibility = "visible"
  } else {
    document.getElementById("result").innerHTML = 'Você estava dentro do limite de velocidade permitido.';
    btn.style.visibility = "hidden";
    btn2.style.visibility = "visible"
  }; 
  
};

cnhPoints()

// Limpar formulário.



