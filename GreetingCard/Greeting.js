const form = document.getElementById('cardForm');
const card = document.getElementById('card');
const generateButton = form.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const occasion = document.getElementById('occasion').value;
  const message = document.getElementById('message').value;

  card.innerHTML = `
        <h2>🎉 Happy ${occasion}!</h2>
        <p><strong>${name}</strong>,</p>
        <p>${message}</p>
        <button id="downloadBtn">Download Card</button>
    `;
  card.style.display = 'block';

  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', function (e) {
    // Ripple effect
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    
    this.style.display = 'none';
    // Download card
    html2canvas(card, { useCORS: true, }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'greeting-card.png';
      link.href = canvas.toDataURL();
      link.click();
      this.style.display = 'inline-block';
    });
  });
});


generateButton.addEventListener('click', function (e) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.left = `${e.offsetX}px`;
  ripple.style.top = `${e.offsetY}px`;
  this.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

document.addEventListener('DOMContentLoaded', () => {
  const typingText = document.querySelector('.typing');
  setTimeout(() => {
    typingText.style.borderRight = 'none';
  }, 3000);
});


