const confettiCanvas = document.getElementById("confetti");
const confettiCtx = confettiCanvas.getContext("2d");

let particles = [];
const particleCount = 300;
const colors = ["#FF69B4", "#FF85B0", "#FFC0CB", "#FFC1E3", "#FFA7C7"];

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

function createParticles() {
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 6 + 1,
      d: Math.random() * particleCount,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.floor(Math.random() * 5) - 5,
    });
  }
}

function drawParticles() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  particles.forEach((particle, i) => {
    confettiCtx.beginPath();
    confettiCtx.fillStyle = particle.color;
    confettiCtx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2, false);
    confettiCtx.fill();
    updateParticle(particle, i);
  });
}

function updateParticle(particle, i) {
  particle.y += Math.cos(particle.d) + 0.5 + particle.r / 3;
  particle.x += Math.sin(particle.d);

  if (particle.y > confettiCanvas.height) {
    particles[i] = {
      x: Math.random() * window.innerWidth,
      y: -10,
      r: particle.r,
      d: particle.d,
      color: particle.color,
      tilt: particle.tilt,
    };
  }
}

function startConfetti() {
  createParticles();
  setInterval(drawParticles, 50);
}

function showMessage() {
  alert(
    "Nếu như có một ngày bạn thật sự bế tắc và mọi cánh cửa dường như đã khép lại thì hãy yên tâm rằng luôn có một người sẵn lòng san sẻ với bạn, đó là tôi. Chúc mừng sinh nhật nhé bạn của tôi!"
  );
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
startConfetti();
