window.onload = function () {
  lanzarConfeti()
}

function lanzarConfeti() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    colors: ["#EEE973","#EED073","#FFCE39","#FCFF85"]
  });
}

function tiempoRestante(fechaObjetivoStr) {
  const ahora = new Date();
  const fechaObjetivo = new Date(fechaObjetivoStr); // formato: "2025-12-31T23:59:59"

  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    return "¡La fecha ya pasó!";
  }

  const segundosTotales = Math.floor(diferencia / 1000);
  const dias = Math.floor(segundosTotales / (60 * 60 * 24));
  const horas = Math.floor((segundosTotales % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((segundosTotales % (60 * 60)) / 60);
  const segundos = segundosTotales % 60;

  return `${dias} : ${horas} : ${minutos} : ${segundos}`
}

// Ejemplo de uso:
function bucle() {
  resultado = tiempoRestante("2025-07-17T23:59:59")
  console.log(resultado)
  
  pregunta1.innerHTML = `<p>pendeja si saber porque nunca me saluda??, solo faltan :</br>${resultado}</br>asi que ahora no se olvide</p>`
  
  requestAnimationFrame(bucle)
}

const fecha1 = document.querySelector("#fecha1")
const fechaBtn1 = document.querySelector("#fechaBtn1")
const pregunta1 = document.querySelector(".pregunta1")
fechaBtn1.addEventListener("click",()=>{
  if (fecha1.value == 18) {
    bucle()
  }
  fecha1.value = ""
})


const fecha2 = document.querySelector("#fecha2")
const fechaBtn2 = document.querySelector("#fechaBtn2")
const pregunta2 = document.querySelector(".pregunta2")
fechaBtn2.addEventListener("click",()=>{
  if (fecha2.value == "marcos" ||fecha2.value == "marco" || fecha2.value == "tu" || fecha2.value == "Marcos" ||fecha2.value == "Marco" || fecha2.value == "Tu" ||
    fecha2.value == "MARCOS" ||fecha2.value == "MARCO" || fecha2.value == "TU"
  ) {
    pregunta2.innerHTML = "<p>Quien mas podria ser...</p>"
  }
  fecha2.value = ""
})

//abrir carta
const cartaV = document.querySelector(".cartaV")
const carta = document.querySelector(".carta")
const cartaBg = document.querySelector(".cartaBg")

cartaV.addEventListener("click",()=>{
  carta.style.display = "block"
  cartaBg.style.display = "block"
  cartaV.style.display = "none"
  document.body.style.overflow = "hidden"
})

cartaBg.addEventListener("click",()=>{
  carta.style.display = "none"
  cartaBg.style.display = "none"
  cartaV.style.display = "block"
  document.body.style.overflow = ""
})

//disco
let audioR = false
const discoImg = document.querySelector(".discoImg")
const discoBtn = document.querySelector(".discoBtn")
const sonido = new Audio('/audio/musica1.mp3'); 
discoBtn.addEventListener("click",()=>{
  if (audioR == false) {
    sonido.currentTime = 0
    sonido.play();
    audioR = true
    discoImg.classList.add("mover")
    discoBtn.textContent = "PAUSAR"
  } else {
    sonido.pause()
    audioR = false
    discoImg.classList.remove("mover")
    discoBtn.textContent = "REPRODUCIR"
  }
})
