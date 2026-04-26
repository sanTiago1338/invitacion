const GUESTS = {
  "13388259": { name:"Santos",                       theme:"gold",    confetti:["#C9A96E","#E8D5A3","#8B6914","#FFD700","#FFF8DC","#D4AF37"] },
  "9485932":  { name:"Rudy Peredo Siles",            theme:"azure",   confetti:["#50A0DC","#A8D0F0","#1E5AA0","#7EC8E3","#B8E0FF","#3A8FC8"] },
  "14441971": { name:"Mayra Daniela Choqueta Apaza", theme:"rose",    confetti:["#D26482","#ECAEC2","#962846","#FF90A8","#FFD0DC","#C04060"] },
  "8661321":  { name:"Jhoel Arispe García",          theme:"emerald", confetti:["#3CB46E","#8CDAAA","#14783C","#50E890","#A0F0C0","#28A050"] },
  "13355461": { name:"Jhamil Vargas A.",              theme:"violet",  confetti:["#A064D2","#C8A0EE","#5A1E96","#C080FF","#E0C0FF","#8040C0"] },
  "7146670":  { name:"José Veimar Choque Morales",   theme:"teal",    confetti:["#28B4B4","#80D8D8","#0A7878","#40E0E0","#90F8F8","#10A0A0"] },
  "528281":   { name:"Ismael Romero",                theme:"crimson", confetti:["#C84650","#E0A0A8","#82141E","#FF6070","#FFC0C8","#A03040"] },
  "15838984": { name:"Edward Solíz",                 theme:"indigo",  confetti:["#5A6EC8","#A8B4EE","#283C96","#7888FF","#C0C8FF","#4050B0"] },
  "9723296":  { name:"Enoc Poris",                   theme:"amber",   confetti:["#C8960A","#EAC870","#8C5A0A","#FFB820","#FFE080","#B07010"] },
  "14112422": { name:"Alex Peñaranda",               theme:"gold",    confetti:["#C9A96E","#E8D5A3","#8B6914","#FFD700","#FFF8DC","#D4AF37"] },
  "12392686": { name:"Vida mia",                   theme:"azure",   confetti:["#50A0DC","#A8D0F0","#1E5AA0","#7EC8E3","#B8E0FF","#3A8FC8"] },
};

const passwordInput = document.getElementById('passwordInput');
const errorMsg = document.getElementById('errorMsg');

document.getElementById('enterBtn').addEventListener('click', checkPassword);
passwordInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') checkPassword();
});

function checkPassword() {
  const guest = GUESTS[passwordInput.value.trim()];
  if (guest) {
    applyTheme(guest.theme);
    unlockInvitation(guest.name, guest.confetti);
  } else {
    passwordInput.classList.add('error');
    errorMsg.classList.add('visible');
    setTimeout(() => passwordInput.classList.remove('error'), 500);
    setTimeout(() => errorMsg.classList.remove('visible'), 3000);
    passwordInput.value = '';
    passwordInput.focus();
  }
}

function applyTheme(theme) {
  document.body.className = theme === 'gold' ? '' : 'theme-' + theme;
  createThemeEffect(theme);
}

function createThemeEffect(theme) {
  const el = document.getElementById('themeEffects');
  el.innerHTML = '';
  
  const fx = {
    gold: () => {
      for (let i = 0; i < 25; i++) {
        const s = mk('div', 'sparkle');
        s.style.left = r(0, 100) + '%';
        s.style.top = r(0, 100) + '%';
        const z = r(6, 16) + 'px';
        s.style.width = s.style.height = z;
        s.style.animationDuration = r(3, 7) + 's';
        s.style.animationDelay = r(0, 8) + 's';
        el.appendChild(s);
      }
    },
    azure: () => {
      for (let i = 0; i < 18; i++) {
        const b = mk('div', 'bubble');
        b.style.left = r(2, 98) + '%';
        b.style.bottom = '0';
        const z = r(20, 60) + 'px';
        b.style.width = b.style.height = z;
        b.style.animationDuration = r(6, 14) + 's';
        b.style.animationDelay = r(0, 12) + 's';
        el.appendChild(b);
      }
    },
    rose: () => {
      for (let i = 0; i < 22; i++) {
        const p = mk('div', 'petal');
        p.style.left = r(0, 100) + '%';
        p.style.top = '-5%';
        const h = r(8, 20) + 'px';
        p.style.width = (parseFloat(h) * 1.6) + 'px';
        p.style.height = h;
        p.style.background = `rgba(210,100,130,${r(3, 7) / 10})`;
        p.style.animationDuration = r(5, 10) + 's';
        p.style.animationDelay = r(0, 10) + 's';
        el.appendChild(p);
      }
    },
    emerald: () => {
      for (let i = 0; i < 18; i++) {
        const l = mk('div', 'leaf');
        l.style.left = r(0, 100) + '%';
        l.style.top = '-5%';
        l.style.width = r(10, 22) + 'px';
        l.style.height = r(16, 35) + 'px';
        l.style.background = `rgba(60,180,110,${r(3, 7) / 10})`;
        l.style.transform = `rotate(${r(0, 360)}deg)`;
        l.style.animationDuration = r(6, 12) + 's';
        l.style.animationDelay = r(0, 10) + 's';
        el.appendChild(l);
      }
    },
    violet: () => {
      for (let i = 0; i < 12; i++) {
        const o = mk('div', 'orb');
        o.style.left = r(5, 90) + '%';
        o.style.top = r(5, 90) + '%';
        const z = r(50, 130) + 'px';
        o.style.width = o.style.height = z;
        o.style.background = `radial-gradient(circle,rgba(160,100,210,${r(3, 6) / 10}) 0%,transparent 70%)`;
        o.style.animationDuration = r(4, 9) + 's';
        o.style.animationDelay = r(0, 6) + 's';
        el.appendChild(o);
      }
    },
    teal: () => {
      for (let i = 0; i < 10; i++) {
        const w = mk('div', 'wave-ring');
        w.style.left = r(10, 90) + '%';
        w.style.top = r(10, 90) + '%';
        const z = r(20, 50) + 'px';
        w.style.width = w.style.height = z;
        w.style.marginLeft = '-' + parseFloat(z) / 2 + 'px';
        w.style.marginTop = '-' + parseFloat(z) / 2 + 'px';
        w.style.animationDuration = r(3, 6) + 's';
        w.style.animationDelay = r(0, 8) + 's';
        el.appendChild(w);
      }
    },
    crimson: () => {
      for (let i = 0; i < 35; i++) {
        const e = mk('div', 'ember');
        e.style.left = r(5, 95) + '%';
        e.style.bottom = r(0, 40) + '%';
        const z = r(2, 5) + 'px';
        e.style.width = e.style.height = z;
        e.style.background = `rgba(200,70,80,${r(6, 10) / 10})`;
        e.style.boxShadow = `0 0 ${r(3, 8)}px rgba(200,70,80,.7)`;
        e.style.animationDuration = r(2, 5) + 's';
        e.style.animationDelay = r(0, 6) + 's';
        el.appendChild(e);
      }
    },
    indigo: () => {
      for (let i = 0; i < 40; i++) {
        const s = mk('div', 'cstar');
        s.style.left = r(0, 100) + '%';
        s.style.top = r(0, 100) + '%';
        const z = r(1, 4) + 'px';
        s.style.width = s.style.height = z;
        s.style.background = `rgba(90,110,200,${r(5, 10) / 10})`;
        s.style.animationDuration = r(2, 6) + 's';
        s.style.animationDelay = r(0, 7) + 's';
        el.appendChild(s);
      }
    },
    amber: () => {
      for (let i = 0; i < 25; i++) {
        const f = mk('div', 'firefly');
        f.style.left = r(5, 90) + '%';
        f.style.top = r(15, 80) + '%';
        const z = r(2, 5) + 'px';
        f.style.width = f.style.height = z;
        f.style.background = `rgba(200,150,40,${r(7, 10) / 10})`;
        f.style.boxShadow = `0 0 6px rgba(200,150,40,.7),0 0 12px rgba(200,150,40,.4)`;
        f.style.animationDuration = r(5, 10) + 's';
        f.style.animationDelay = r(0, 9) + 's';
        el.appendChild(f);
      }
    },
  };
  
  if (fx[theme]) fx[theme]();
}

function mk(t, c) {
  const e = document.createElement(t);
  e.className = c;
  return e;
}

function r(a, b) {
  return Math.random() * (b - a) + a;
}

function unlockInvitation(guestName, confettiColors) {
  document.getElementById('guestName').textContent = guestName;
  const lockScreen = document.getElementById('lockScreen');
  const wrapper = document.getElementById('invitationWrapper');
  const invitation = document.getElementById('invitation');
  const content = document.getElementById('content');
  const musicBtn = document.getElementById('musicBtn');
  
  lockScreen.classList.add('unlocked');
  launchConfetti(confettiColors);
  
  setTimeout(() => {
    lockScreen.style.display = 'none';
    wrapper.classList.add('visible');
    musicBtn.style.display = 'flex';
    
    setTimeout(() => {
      invitation.classList.add('revealed');
      setTimeout(() => {
        content.classList.add('animate');
        startCountdown();
      }, 600);
    }, 100);
  }, 900);
}

function createParticles() {
  const c = document.getElementById('particles');
  
  for (let i = 0; i < 40; i++) {
    const p = mk('div', 'particle');
    p.style.left = r(0, 100) + '%';
    p.style.animationDuration = r(7, 19) + 's';
    p.style.animationDelay = r(0, 15) + 's';
    const z = r(1, 4) + 'px';
    p.style.width = p.style.height = z;
    c.appendChild(p);
  }
  
  for (let i = 0; i < 18; i++) {
    const s = mk('div', 'star');
    s.style.left = r(0, 100) + '%';
    s.style.top = r(0, 100) + '%';
    const z = r(4, 12) + 'px';
    s.style.width = s.style.height = z;
    s.style.animationDuration = r(2.5, 7) + 's';
    s.style.animationDelay = r(0, 6) + 's';
    c.appendChild(s);
  }
}

function launchConfetti(colors) {
  const c = document.getElementById('confetti');
  c.style.display = 'block';
  
  const sh = ['50%', '0', '3px'];
  
  for (let i = 0; i < 140; i++) {
    const p = mk('div', 'confetti-piece');
    p.style.left = r(0, 100) + '%';
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const z = r(5, 14) + 'px';
    p.style.width = z;
    p.style.height = z;
    p.style.borderRadius = sh[Math.floor(Math.random() * sh.length)];
    p.style.animationDuration = r(1.5, 3.5) + 's';
    p.style.animationDelay = r(0, 2.5) + 's';
    c.appendChild(p);
  }
  
  setTimeout(() => {
    c.style.display = 'none';
    c.innerHTML = '';
  }, 7000);
}

function startCountdown() {
  const eventDate = new Date('2026-04-30T23:59:59');
  
  function update() {
    const diff = eventDate - new Date();
    
    if (diff <= 0) {
      ['days', 'hours', 'minutes', 'seconds'].forEach(id => 
        document.getElementById(id).textContent = '00'
      );
      return;
    }
    
    document.getElementById('days').textContent = String(Math.floor(diff / 864e5)).padStart(2, '0');
    document.getElementById('hours').textContent = String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0');
    document.getElementById('minutes').textContent = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0');
    document.getElementById('seconds').textContent = String(Math.floor((diff % 6e4) / 1e3)).padStart(2, '0');
  }
  
  update();
  setInterval(update, 1000);
}

let isPlaying = false;
let audioCtx = null;
let musicTimeout = null;

document.getElementById('musicBtn').addEventListener('click', toggleMusic);

function playNote(freq, t, dur) {
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.value = freq;
  g.gain.setValueAtTime(.06, t);
  g.gain.exponentialRampToValueAtTime(.001, t + dur);
  osc.connect(g);
  g.connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + dur);
}

function playMelody() {
  if (!isPlaying) return;
  
  const m = [523, 523, 587, 523, 698, 659, 523, 523, 587, 523, 784, 698, 523, 523, 1047, 880, 698, 659, 587, 932, 932, 880, 698, 784, 698];
  const now = audioCtx.currentTime;
  
  m.forEach((n, i) => playNote(n, now + i * .35, .4));
  musicTimeout = setTimeout(playMelody, m.length * 350 + 1000);
}

function toggleMusic() {
  const btn = document.getElementById('musicBtn');
  
  if (!isPlaying) {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtx.resume();
    isPlaying = true;
    btn.classList.add('playing');
    playMelody();
  } else {
    isPlaying = false;
    btn.classList.remove('playing');
    clearTimeout(musicTimeout);
  }
}

createParticles();
passwordInput.focus();
