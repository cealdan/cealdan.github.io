// Canvas background "bits"
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const numBits = 200;
const bits = [];
const colors = {
    dark: 'rgba(77, 166, 255, 0.7)',
    light: 'rgba(77, 166, 255, 0.7)'
};

for(let i=0; i<numBits; i++){
    bits.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random()*1.5,
        value: Math.random() > 0.5 ? '1' : '0'
    });
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const theme = document.body.classList.contains('light') ? 'light' : 'dark';

    bits.forEach(bit => {
        ctx.fillStyle = colors[theme];
        ctx.font = '16px monospace';
        ctx.fillText(bit.value, bit.x, bit.y);

        bit.y += bit.speed;
        if(bit.y > canvas.height){
            bit.y = -20;
            bit.x = Math.random() * canvas.width;
            bit.value = Math.random() > 0.5 ? '1' : '0';
        }
    });

    requestAnimationFrame(draw);
}
draw();

// Thème
const toggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'light') {
    document.body.classList.add('light');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    if(toggle.checked){
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    }
});
