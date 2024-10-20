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
    " Chúc em 20/10 vui vẻ hạnh phúc, đạt được nhiều thành tích tốt trong học tập. Luôn tràn đầy năng lượng!!!.  Luôn giữ được tinh thần lạc quan phấn đấu để đạt được điều mong muốn. Tóm lại chúc em 20/10 có tất cả ♥️♥️ From Huy Hunter with Love"
  );
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
startConfetti();
