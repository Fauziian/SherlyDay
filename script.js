/* ===== script.js ===== */

/* ============================================================
   DATA
   ============================================================ */
const SVG = {
  smile: `<svg viewBox="0 0 24 24" width="42" height="42"><circle cx="12" cy="12" r="10" fill="#ffd700"/><path d="M8.5 14.5q3.5 3 7 0" stroke="#5a3e00" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="9" cy="10" r="1.3" fill="#5a3e00"/><circle cx="15" cy="10" r="1.3" fill="#5a3e00"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" width="42" height="42"><path d="M7 2v11h3v9l7-12h-4l4-8z" fill="#ff6eb4"/></svg>`,
  music: `<svg viewBox="0 0 24 24" width="42" height="42"><path d="M12 3v10.55A4 4 0 1014 17V7h4V3z" fill="#9b59f7"/></svg>`,
  hands: `<svg viewBox="0 0 24 24" width="42" height="42"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#4fc3f7"/></svg>`,
  star: `<svg viewBox="0 0 24 24" width="42" height="42"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#ff9800"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" width="42" height="42"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ff6eb4"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" width="42" height="42"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5z" fill="#9b59f7"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" width="42" height="42"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="#ffd700"/></svg>`,
  rose: `<svg viewBox="0 0 24 24" width="42" height="42"><path d="M12 2C9 2 6 5 6 8c0 4 4 7 6 9 2-2 6-5 6-9 0-3-3-6-6-6z" fill="#ff6eb4"/><path d="M12 17v5" stroke="#4caf50" stroke-width="2"/></svg>`,
  hug: `<svg viewBox="0 0 24 24" width="42" height="42"><circle cx="12" cy="6" r="3" fill="#ff9800"/><path d="M5 12c0-2 2-4 4-4h1l2 4 2-4h1c2 0 4 2 4 4v3H5z" fill="#ff9800"/></svg>`,
  note: `<svg viewBox="0 0 24 24" width="42" height="42"><path d="M9 18V5l12-2v13" stroke="#9b59f7" stroke-width="2" fill="none"/><circle cx="6" cy="18" r="3" fill="#9b59f7"/><circle cx="18" cy="16" r="3" fill="#9b59f7"/></svg>`,
  cake: `<svg viewBox="0 0 24 24" width="42" height="42"><rect x="3" y="10" width="18" height="11" rx="2" fill="#ff6eb4"/><path d="M12 2v5M8 2v3M16 2v3" stroke="#ff9800" stroke-width="2" stroke-linecap="round"/><path d="M3 14h18" stroke="#fff" stroke-width="1"/></svg>`,
  butterfly: `<svg viewBox="0 0 24 24" width="42" height="42"><path d="M12 12C8 8 2 8 2 12s4 6 10 0zm0 0c4-4 10-4 10 0s-4 6-10 0z" fill="#4fc3f7"/><circle cx="12" cy="12" r="1.5" fill="#333"/></svg>`,
  sunset: `<svg viewBox="0 0 24 24" width="48" height="48"><path d="M3 17h18M3 20h18" stroke="#4fc3f7" stroke-width="2"/><path d="M12 3v2M4.22 5.22l1.42 1.42M1 12h2M21 12h2M18.36 6.64l1.42-1.42" stroke="#ff9800" stroke-width="1.5" stroke-linecap="round"/><path d="M12 7a5 5 0 0 1 5 5H7a5 5 0 0 1 5-5z" fill="#ff9800"/></svg>`,
  coffee: `<svg viewBox="0 0 24 24" width="48" height="48"><path d="M4 9h13v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" fill="#795548"/><path d="M17 10h2a2 2 0 0 1 0 4h-2" stroke="#795548" stroke-width="2" fill="none"/><path d="M7 4c0-2 2-2 2-4M11 4c0-2 2-2 2-4" stroke="#9e9e9e" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" width="48" height="48"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#ffd700"/></svg>`,
  flower: `<svg viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="3" fill="#ffd700"/><ellipse cx="12" cy="6" rx="2.5" ry="4" fill="#ff6eb4"/><ellipse cx="12" cy="18" rx="2.5" ry="4" fill="#ff6eb4"/><ellipse cx="6" cy="12" rx="4" ry="2.5" fill="#9b59f7"/><ellipse cx="18" cy="12" rx="4" ry="2.5" fill="#9b59f7"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="10" fill="none" stroke="#4fc3f7" stroke-width="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#4fc3f7" stroke-width="1.5"/><path d="M16 8l-5 5-2 5 5-2 5-5z" fill="#ff6eb4"/></svg>`,
  eyes: `<svg viewBox="0 0 24 24" width="48" height="48"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="#9b59f7" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="#9b59f7"/><path d="M18 5l2-2M6 5L4 3" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/></svg>`,
};

const REASONS = [
  { icon: SVG.smile, title: 'Senyum Km', text: 'Senyum km literally bikin hari ak instantly jd lebih cerah. No cap, itu hal pertama yg selalu ak kangeni fr fr.' },
  { icon: SVG.music, title: 'Tawa Km Hits Different', text: 'Tawa km literally jd soundtrack favorit ak. Gak ada nada yg lebih merdu, no cap. Ak bisa denger seharian.' },
  { icon: SVG.hands, title: 'Care Km yg Bikin Baper', text: 'Cara km care sama orang2 di sekitar km bikin ak makin kagum & makin jatuh cinta tiap harinya, fr fr.' },
  { icon: SVG.heart, title: 'Tulus Bgt Hati Km', text: 'Hati km yg tulus & murni itu jd alasan utama kenapa ak cinta km lebih dari yg bisa ak ungkapin. Lowkey bikin baper bgt.' },
  { icon: SVG.shield, title: 'Km Bikin Ak Nyaman', text: 'Kelembutan hati km bikin ak ngerasa aman bgt. Di samping km, ak bisa jd diri ak sendiri. It\'s literally the best vibe.' },
  { icon: SVG.sparkle, title: 'Semua ttg Km', text: 'Bukan cuma bagian2nya — ak cinta km seutuhnya, dgn semua keunikan km. You literally understood the assignment.' },
];

const SURPRISES = [
  { icon: SVG.rose, title: 'Setangkai Mawar', text: 'Bunga ini emg gak bisa km sentuh, tp perasaan di baliknya nyata bgt — se-real cinta ak buat km.' },
  { icon: SVG.star, title: 'Bintang Cahaya', text: 'Kalo bisa, ak bakal petik semua bintang di langit & kasihin semuanya buat km. Km literally layak dapetin whole universe.' },
  { icon: SVG.note, title: 'Lagu Hati Ak', text: '"Km itu melodi yg terus keputer di kepala ak — lagu favorit yg literally gak pernah ak skip. Hits different bgt."' },
  { icon: SVG.cake, title: 'Permen Manis', text: 'Kyk kue yg manis — begitulah km ngisi hidup ak dgn manis yg gak pernah basi, every single day. It\'s giving sweetness overload.' },
  { icon: SVG.butterfly, title: 'Butterflies fr fr', text: 'Setiap liat km, masih ada ribuan kupu2 di perut ak. Perasaan itu gak pernah pudar. Bucin? Iyh, ak bucin km. No shame.' },
];

const GALLERY = [
  { image: 'images/1.jpeg', caption: 'Saat pertama ak sadar — km orangnya, fr no cap' },
  { image: 'images/2.jpeg', caption: 'Ngopi bareng km, momen yg selalu pgn ak ulang, ngl' },
  { image: 'images/3.jpeg', caption: 'Malem2 yg hits different cuma krn km ada di sana' },
  { image: 'images/4.jpeg', caption: 'Kyk musim semi — kehadiran km bikin semua mekar fr' },
  { image: 'images/5.jpeg', caption: 'Petualangan kecil kita yg always ngerasa luar biasa' },
  { image: 'images/6.jpeg', caption: 'Tatapan km yg bikin ak literally ngerasa spesial bgt' },
];

const LETTER = `
<p>Sherly Agustina yg paling ak sayang,</p>
<p>Hari ini hari yg spesial bgt — bukan cuma krn kalender bilang gitu, tp krn hari ini ak pgn km tau seberapa dalem perasaan ak buat km. Fr fr, ini bukan lebay.</p>
<p>Setiap hari sama km itu literally kyk ngebaca halaman baru dari cerita paling indah yg pernah ak baca. Km hadir dgn segala keunikan km, dgn senyum yg bikin tenang, dgn tawa yg menghangatkan, & dgn hati yg always bikin ak ngerasa udh pulang.</p>
<p>Ngl, tiap liat km, ak masih baper bgt. Masih ada butterflies di perut ak, masih ngerasa kyk hari pertama. Km literally rent free di kepala ak — 24/7, no skip, no cap.</p>
<p>Makasih udh jd km. Makasih udh milih buat ada di sisi ak. & makasih udh mau nerima cinta ak yg sederhana ini. Km tuh literally the best thing that ever happened to me.</p>
<p>Ak janji — ak bakal terus berusaha jd seseorang yg layak buat km banggain. Krn km layak dapetin yg terbaik, & ak bakal always berusaha kasih itu buat km. On god, no cap.</p>
<p>Selamat Hari Pacar, Sherly. Semoga hari ini & setiap hari setelahnya penuh dgn kebahagiaan yg km layak dapetin. Ak sayang km bgt, fr fr.</p>
`;

/* ============================================================
   AUDIO PLAYER — MASA INI, NANTI, DAN MASA INDAH LAINNYA - NUCA __ mashup version
   ============================================================ */
const AUDIO_FILE = 'mp3/Hitam Putih Pun Mulai Berwarna.mp3';
const AUDIO_START = 116;
const AUDIO_END = 999999;

let bgAudio = null;
let audioMuted = false;
let audioUnlocked = false;

function initAudio() {
  if (bgAudio) return;
  bgAudio = new Audio(AUDIO_FILE);
  bgAudio.volume = 0.85;
  bgAudio.preload = 'auto';
  bgAudio.addEventListener('ended', () => {
    bgAudio.currentTime = AUDIO_START;
    bgAudio.play().catch(() => {});
  });
}

async function unlockAudio() {
  if (audioUnlocked) return true;
  initAudio();
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      const ctx = getAudioCtx();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }
    }
    audioUnlocked = true;
    return true;
  } catch (e) {
    return false;
  }
}


function fadeInMusic() {
  initAudio();
  unlockAudio().then(() => {
    bgAudio.currentTime = AUDIO_START;
    bgAudio.muted = false;
    audioMuted = false;
    bgAudio.volume = 0;

    const promise = bgAudio.play();
    if (promise !== undefined) {
      promise.then(() => {
        setMusicWaves(true);
        updateMusicBarUI();
        let vol = 0;
        const interval = setInterval(() => {
          vol += 0.05;
          if (vol >= 0.85) {
            bgAudio.volume = 0.85;
            clearInterval(interval);
          } else {
            bgAudio.volume = vol;
          }
        }, 150);
      }).catch((err) => {
        console.log('Play blocked:', err);
        audioMuted = true;
        bgAudio.muted = true;
        updateMusicBarUI();
      });
    }
  }).catch(() => {
    updateMusicBarUI();
  });
}

function startBackgroundMusic(unmute) {
  initAudio();
  unlockAudio().then(() => {
    bgAudio.currentTime = AUDIO_START;
    if (unmute) {
      bgAudio.muted = false;
      audioMuted = false;
      bgAudio.volume = 0.85;
    } else {
      bgAudio.muted = true;
      audioMuted = true;
      bgAudio.volume = 0.85;
    }

    const promise = bgAudio.play();
    if (promise !== undefined) {
      promise.then(() => {
        setMusicWaves(true);
        updateMusicBarUI();
      }).catch(() => {
        setTimeout(() => {
          bgAudio.currentTime = AUDIO_START;
          bgAudio.muted = false;
          audioMuted = false;
          bgAudio.play().catch(() => {});
        }, 150);
        updateMusicBarUI();
      });
    }
  }).catch(() => {
    updateMusicBarUI();
  });
}

/* Music bar button — always a real user gesture */
function toggleMusic() {
  if (!bgAudio) { startBackgroundMusic(true); return; }
  if (bgAudio.paused) {
    bgAudio.muted = false;
    audioMuted = false;
    bgAudio.play().then(() => { setMusicWaves(true); updateMusicBarUI(); });
  } else if (audioMuted) {
    bgAudio.muted = false;
    audioMuted = false;
    updateMusicBarUI();
  } else {
    bgAudio.muted = true;
    audioMuted = true;
    updateMusicBarUI();
  }
}

function updateMusicBarUI() {
  const bar = document.getElementById('musicBar');
  const btn = document.getElementById('musicBtn');
  const hint = document.getElementById('musicHint');
  if (!bar) return;
  if (audioMuted) {
    bar.classList.add('muted');
    btn.classList.add('paused');
    if (hint) hint.style.display = 'inline';
  } else {
    bar.classList.remove('muted');
    btn.classList.remove('paused');
    if (hint) hint.style.display = 'none';
  }
}

function setMusicWaves(playing) {
  const btn = document.getElementById('musicBtn');
  if (btn) btn.classList.toggle('paused', !playing);
}

function hideMusicBar() {
  const bar = document.getElementById('musicBar');
  if (bar) bar.style.display = 'none';
}

/* ============================================================
   LOCK SCREEN LOGIC
   ============================================================ */
let isMuted = false;
let countdownInterval = null;
let audioCtx = null;


function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTick() {
  if (isMuted) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sine'; osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.1);
  } catch (e) { }
}

function playBoom() {
  if (isMuted) return;
  try {
    const ctx = getAudioCtx();
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.05));
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.value = 0.3;
    src.connect(gain); gain.connect(ctx.destination);
    src.start();
  } catch (e) { }
}

function toggleMute() {
  isMuted = !isMuted;
  document.getElementById('muteBtn').textContent = isMuted ? '🔇' : '🔊';
}

/* ---------- Stars canvas ---------- */
function initStars() {
  const canvas = document.getElementById('starsCanvas');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.3,
      a: Math.random(),
      da: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
    }));
  }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.a += s.da;
      if (s.a > 1 || s.a < 0) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ---------- Particle canvas (confetti/hearts) ---------- */
let particles = [];
let particleRunning = false;
const PCANVAS = document.getElementById('particleCanvas');
const PCTX = PCANVAS.getContext('2d');

function resizeParticleCanvas() {
  PCANVAS.width = window.innerWidth;
  PCANVAS.height = window.innerHeight;
}
resizeParticleCanvas();
window.addEventListener('resize', resizeParticleCanvas);

function spawnParticles(count = 120) {
  const shapes = ['❤️', '💗', '⭐', '✨', '💖', '🌸', '💫', '🎉'];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * PCANVAS.width,
      y: -20 - Math.random() * 200,
      vy: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 2,
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 5,
      size: Math.random() * 16 + 10,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      opacity: 1,
    });
  }
}

function animateParticles() {
  if (!particleRunning) return;
  PCTX.clearRect(0, 0, PCANVAS.width, PCANVAS.height);
  particles = particles.filter(p => p.opacity > 0.05 && p.y < PCANVAS.height + 50);
  particles.forEach(p => {
    p.y += p.vy; p.x += p.vx;
    p.rot += p.rotV;
    if (p.y > PCANVAS.height * 0.7) p.opacity -= 0.008;
    PCTX.save();
    PCTX.globalAlpha = p.opacity;
    PCTX.font = `${p.size}px serif`;
    PCTX.translate(p.x, p.y);
    PCTX.rotate(p.rot * Math.PI / 180);
    PCTX.fillText(p.shape, -p.size / 2, p.size / 2);
    PCTX.restore();
  });
  requestAnimationFrame(animateParticles);
}

function startConfetti(count = 120) {
  particleRunning = true;
  spawnParticles(count);
  animateParticles();
}
function stopConfetti() {
  particleRunning = false;
  PCTX.clearRect(0, 0, PCANVAS.width, PCANVAS.height);
  particles = [];
}

/* ---------- Countdown helpers ---------- */
function pad(n) { return String(n).padStart(2, '0'); }

/* ---------- Main countdown logic ---------- */
let specialPhase = false;
let celebDone = false;

function getMidnightTarget() {
  const now = new Date();
  const target = new Date(now);
  const isLastDayOfMonth = now.getDate() === new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  if (isLastDayOfMonth) {
    target.setMonth(now.getMonth() + 1, 1);
    target.setHours(0, 0, 0, 0);
  } else {
    target.setDate(now.getDate() + 1);
    target.setHours(0, 0, 0, 0);
  }
  return target;
}

function checkCelebrationShown() {
  const key = 'celebrationShown_' + new Date().toISOString().slice(0, 10);
  return localStorage.getItem(key) === '1';
}
function markCelebrationShown() {
  const key = 'celebrationShown_' + new Date().toISOString().slice(0, 10);
  localStorage.setItem(key, '1');
}

let countdownDuration = 12;

function startCountdown() {
  initStars();
  // Ensure we clear any stale state
  document.documentElement.classList.remove('grayscale-active');

  // Audio starts muted - user must click to unlock
  isMuted = true;
  audioMuted = true;
  initAudio();
  document.getElementById('muteBtn').textContent = '🔇';

  // Add click listener to unlock audio on first user interaction
  document.addEventListener('click', unlockAudioOnClick, { once: true });
  document.addEventListener('touchstart', unlockAudioOnClick, { once: true });

  // Calculate countdown to next midnight
  const target = getMidnightTarget();
  const now = new Date();
  countdownDuration = Math.max(0, Math.floor((target - now) / 1000));

  clearInterval(countdownInterval);
  countdownInterval = setInterval(tick, 1000);
  tick();
}

function unlockAudioOnClick() {
  isMuted = false;
  audioMuted = false;
  document.getElementById('muteBtn').textContent = '🔊';
  initAudio();
}

function tick() {
  const diff = countdownDuration;
  countdownDuration = Math.max(0, countdownDuration - 1);

  const hh = Math.floor(diff / 3600);
  const mm = Math.floor((diff % 3600) / 60);
  const ss = diff % 60;

  const formatted = `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
  const countdownEl = document.getElementById('digitalCountdown');
  if (countdownEl) {
    countdownEl.textContent = formatted;

    // Apply color and sound logic in the last 10 seconds
    if (diff <= 10 && diff >= 0) {
      playTick();
      countdownEl.classList.remove('countdown-green', 'countdown-yellow', 'countdown-red');
      if (diff >= 8) {
        countdownEl.classList.add('countdown-green');
      } else if (diff >= 4) {
        countdownEl.classList.add('countdown-yellow');
      } else {
        countdownEl.classList.add('countdown-red');
      }
    }
  }

  if (diff === 0) {
    clearInterval(countdownInterval);
    triggerMidnightCelebration();
  }
}

/* --- Midnight celebration --- */
function triggerMidnightCelebration() {
  playBoom();

  // Keep the page grayscale for a short moment before slowly restoring color
  document.documentElement.classList.add('grayscale-active');

  // Start music only when the celebration screen appears
  startBackgroundMusic(true);

  const normal = document.getElementById('lockNormal');
  const celeb = document.getElementById('lockCelebration');
  normal.style.transition = 'opacity 0.5s';
  normal.style.opacity = '0';

  setTimeout(() => {
    normal.classList.add('hidden');
    celeb.classList.remove('hidden');

    // Restore color slowly over 3.5 seconds
    setTimeout(() => {
      document.documentElement.classList.remove('grayscale-active');
    }, 3500);

    startConfetti(200);
    screenShake();
    markCelebrationShown();
    setTimeout(() => {
      stopConfetti();
      enterMainApp();
    }, 4000);
  }, 500);
}

function screenShake() {
  document.body.classList.add('screen-shake');
  setTimeout(() => document.body.classList.remove('screen-shake'), 400);
}

/* --- Enter with brief celebration (post-midnight open) --- */
function enterWithCelebration(mode) {
  // Queue music (unmuted) — auto path, starts unmuted and fades in
  startBackgroundMusic(true);
  if (mode === 'special') {
    const normal = document.getElementById('lockNormal');
    const celeb = document.getElementById('lockCelebration');
    normal.classList.add('hidden');
    celeb.classList.remove('hidden');
    startConfetti(180);
    screenShake();
    playBoom();
    markCelebrationShown();
    setTimeout(() => {
      stopConfetti();
      enterMainApp();
    }, 3500);
  } else {
    // Normal post-midnight: quick fade-in then enter
    startConfetti(60);
    setTimeout(() => {
      stopConfetti();
      enterMainApp();
    }, 2000);
  }
}

/* --- Enter main app --- */
function enterMainApp() {
  const lockScreen = document.getElementById('lockScreen');
  const mainApp = document.getElementById('mainApp');
  lockScreen.classList.add('fade-out');
  setTimeout(() => {
    lockScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    mainApp.classList.add('fade-in');
    initMainApp();
    // Music is already queued by the caller (skipToMain or celebration).
    // startBackgroundMusic was called there with the correct unmute flag.
  }, 1000);
}

function skipToMain() {
  clearInterval(countdownInterval);
  clearInterval(specInterval);
  stopConfetti();
  // This IS a direct user gesture (button onclick) → unmute = true
  startBackgroundMusic(true);
  enterMainApp();
}

/* ============================================================
   MAIN APP
   ============================================================ */
function initMainApp() {
  buildFloatingHearts();
  buildReasons();
  buildSurprises();
  buildLetter();
  buildGallery();
  initHeroCanvas();
  initClosingCanvas();
  initScrollAnimations();
  init3DTilt();
}

/* ---------- Floating hearts ---------- */
function buildFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  const emojis = ['♥', '♡', '✦', '✧', '❀', '✿', '⋆'];
  for (let i = 0; i < 16; i++) {
    const el = document.createElement('div');
    el.className = 'fheart';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      font-size: ${0.8 + Math.random() * 1.5}rem;
      animation-duration: ${8 + Math.random() * 12}s;
      animation-delay: ${Math.random() * 8}s;
      opacity: 0;
    `;
    container.appendChild(el);
  }
}

/* ---------- Reasons ---------- */
function buildReasons() {
  const grid = document.getElementById('reasonsGrid');
  grid.innerHTML = REASONS.map((r, i) => `
    <div class="reason-card" style="animation-delay:${i * 0.1}s">
      <span class="reason-icon">${r.icon}</span>
      <div class="reason-title">${r.title}</div>
      <p class="reason-text">${r.text}</p>
    </div>
  `).join('');
}

/* ---------- Surprises ---------- */
function buildSurprises() {
  const grid = document.getElementById('surpriseGrid');
  grid.innerHTML = SURPRISES.map((s, i) => `
    <div class="surprise-card-3d" id="scard-${i}" onclick="flipSurprise(${i})">
      <div class="card-inner">
        <div class="card-front">
          <div class="gift-box-container">
            <div class="gift-box-bow"></div>
            <div class="gift-box-lid"></div>
            <div class="gift-box"></div>
          </div>
          <div class="surprise-card-label font-outfit">Tap buat buka hadiah 🎁</div>
        </div>
        <div class="card-back">
          <span class="surprise-back-icon">${s.icon}</span>
          <h4 class="card-back-title">${s.title}</h4>
          <p class="card-back-text">${s.text}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function flipSurprise(i) {
  const card = document.getElementById('scard-' + i);
  if (!card) return;
  const isFlipped = card.classList.contains('flipped');

  if (!isFlipped) {
    playBoom();
    startConfetti(15);
    setTimeout(stopConfetti, 1500);
  }

  card.classList.toggle('flipped');
}

/* ---------- Letter ---------- */
function buildLetter() {
  document.getElementById('letterBody').innerHTML = LETTER;
}

/* ---------- Gallery ---------- */
function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = GALLERY.map(g => `
    <div class="gallery-card">
      <img class="gallery-img" src="${g.image}" alt="Kenangan">
      <div class="gallery-overlay">
        <span class="gallery-caption">${g.caption}</span>
      </div>
    </div>
  `).join('');
}

/* ---------- Hero canvas (particles) ---------- */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let pts = [];
  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 0.5,
      c: ['#ff6eb4', '#9b59f7', '#4fc3f7'][Math.floor(Math.random() * 3)],
    }));
  }
  resize();
  window.addEventListener('resize', resize);
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c; ctx.globalAlpha = 0.5; ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

/* ---------- Closing canvas ---------- */
function initClosingCanvas() {
  const canvas = document.getElementById('closingCanvas');
  const ctx = canvas.getContext('2d');
  const hearts = Array.from({ length: 30 }, () => ({
    x: Math.random() * 100, y: Math.random() * 100,
    s: Math.random() * 0.8 + 0.4,
    a: Math.random(), da: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
  }));
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize(); window.addEventListener('resize', resize);
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => {
      h.a += h.da;
      if (h.a > 0.8 || h.a < 0.1) h.da *= -1;
      ctx.font = `${h.s * 2}rem serif`;
      ctx.globalAlpha = h.a * 0.4;
      ctx.fillText('💗', h.x / 100 * canvas.width, h.y / 100 * canvas.height);
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

/* ---------- Scroll animations ---------- */
function initScrollAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reason-card, .surprise-card, .gallery-card, .letter-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    obs.observe(el);
  });
}

/* ---------- Helpers ---------- */
function triggerCelebration() {
  const overlay = document.getElementById('proposalOverlay');
  const proposalStage = document.getElementById('proposalStageContainer');
  const mapStage = document.getElementById('mapStageContainer');
  const textEl = document.getElementById('proposalTextMain');

  if (!overlay || !proposalStage || !mapStage || !textEl) return;

  // 1. Reset state
  overlay.style.opacity = '1';
  overlay.classList.remove('hidden');

  proposalStage.classList.remove('hidden');
  proposalStage.style.opacity = '1';

  mapStage.classList.add('hidden');
  mapStage.style.opacity = '0';

  textEl.textContent = '';
  textEl.style.opacity = '0';

  // 2. Play initial sound effect
  playBoom();

  // 3. Generate background petals
  spawnProposalPetals();

  // 4. Start rising hearts reaction near the woman silhouette
  spawnSparkleHearts();

  // 5. Typewriter effect for "Sherly Agustina 💖"
  const message = "Sherly Agustina 💖";
  let charIdx = 0;

  setTimeout(() => {
    textEl.style.opacity = '1';
    const typingInterval = setInterval(() => {
      if (charIdx < message.length) {
        textEl.textContent += message.charAt(charIdx);
        charIdx++;
      } else {
        clearInterval(typingInterval);

        // After typing is fully finished, transition to the Map Journey stage!
        setTimeout(transitionToMapJourney, 2000);
      }
    }, 100);
  }, 4000);
}

function transitionToMapJourney() {
  const proposalStage = document.getElementById('proposalStageContainer');
  const mapStage = document.getElementById('mapStageContainer');

  if (!proposalStage || !mapStage) return;

  // Fade out proposal stage
  proposalStage.style.opacity = '0';

  setTimeout(() => {
    proposalStage.classList.add('hidden');

    // Show map stage & fade it in
    mapStage.classList.remove('hidden');
    // Force browser reflow to trigger transition
    mapStage.offsetHeight;
    mapStage.style.opacity = '1';

    // Start the train animation after a brief delay
    setTimeout(animateTrainAlongPath, 1000);
  }, 800);
}

function animateTrainAlongPath() {
  const train = document.getElementById('trainIcon');
  const track = document.getElementById('trainTrack');
  const statusTitle = document.getElementById('travelStatusTitle');
  const message = document.getElementById('travelMessage');
  const overlay = document.getElementById('proposalOverlay');

  if (!train || !track || !statusTitle || !message) return;

  train.setAttribute('opacity', '1');
  const pathLength = track.getTotalLength();

  let startTime = null;
  const duration = 7000; // 7 seconds travel time

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const distance = progress * pathLength;

    const pt = track.getPointAtLength(distance);
    // Calculate tangent for rotation
    const ptNext = track.getPointAtLength(Math.min(distance + 2, pathLength));
    const angle = Math.atan2(ptNext.y - pt.y, ptNext.x - pt.x) * 180 / Math.PI;

    train.setAttribute('transform', `translate(${pt.x}, ${pt.y}) rotate(${angle})`);

    // Update live status message based on progress
    if (progress < 0.25) {
      statusTitle.textContent = "BERANGKAT DARI BANDUNG 🚄";
      message.textContent = "Rifqi otw berangkat naik kereta api tanggal 21 Agustus dari Bandung... Barang-barang udh siap, no cap!";
    } else if (progress < 0.6) {
      statusTitle.textContent = "MELINTASI JAWA TENGAH 🛤️";
      message.textContent = "Kereta melaju cepat membelah Jawa Tengah. Tiap stasiun yang dilewati bikin ak makin gak sabar ketemu km!";
    } else if (progress < 0.9) {
      statusTitle.textContent = "MEMASUKI JAWA TIMUR 🌅";
      message.textContent = "Udah masuk Jawa Timur! Tinggal bentar lagi nyampe. Hati ak rasanya kyk ada butterflies baper bgt, fr fr.";
    } else {
      statusTitle.textContent = "TIBA DI SIDOARJO 🚉";
      message.textContent = "Nyampe Sidoarjo! Ak otw mendatangi km tanggal 22 Agustus. See you very soon, Sherly sayang! 💗";
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // Arrived at destination! Trigger heart explosions
      playBoom();
      spawnSidoarjoHearts();

      // Keep displaying the final arrival message, then transition to flower stage
      setTimeout(() => {
        transitionToFlowerStage();
      }, 5500);
    }
  }

  requestAnimationFrame(step);
}

let flowerSparkleInterval = null;

function transitionToFlowerStage() {
  const mapStage = document.getElementById('mapStageContainer');
  const flowerStage = document.getElementById('flowerStageContainer');

  if (!mapStage || !flowerStage) return;

  mapStage.style.transition = 'opacity 0.8s ease';
  mapStage.style.opacity = '0';

  setTimeout(() => {
    mapStage.classList.add('hidden');
    flowerStage.classList.remove('hidden');

    // Force browser reflow to trigger transition
    flowerStage.offsetHeight;
    flowerStage.style.opacity = '1';

    // Add blooming class to flowers group
    const flowers = flowerStage.querySelector('.bouquet-flowers');
    if (flowers) {
      flowers.classList.add('bloom-active');
    }

    // Spawn flower sparkles
    spawnFlowerParticles();

    // 3D tilt interaction specifically for the flower card
    initFlowerCard3D();
  }, 800);
}

function spawnFlowerParticles() {
  const container = document.getElementById('flowerSparkles');
  if (!container) return;

  container.innerHTML = '';

  // Continuously spawn flying flower petals & sparkles inside the card
  flowerSparkleInterval = setInterval(() => {
    const overlay = document.getElementById('proposalOverlay');
    if (overlay && !overlay.classList.contains('hidden')) {
      const dot = document.createElement('div');
      dot.className = 'flower-sparkle-dot';

      // Random coordinates and sizes
      const size = Math.random() * 12 + 6;
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.bottom = '10%';

      // Floating flower petal style (pinkish/red/purple glowing dots)
      const colors = [
        'rgba(255, 110, 180, 0.95)', // pink
        'rgba(255, 51, 51, 0.95)',   // red
        'rgba(224, 36, 71, 0.95)',   // deep red
        'rgba(255, 204, 220, 0.95)', // pale rose
        'rgba(255, 255, 255, 0.95)'  // gold/white glow
      ];
      dot.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]} 20%, transparent 80%)`;

      container.appendChild(dot);

      // Remove particle after animation completes
      setTimeout(() => dot.remove(), 2000);
    } else {
      clearInterval(flowerSparkleInterval);
    }
  }, 100);
}

function initFlowerCard3D() {
  const card = document.querySelector('.flower-card-3d');
  if (!card) return;

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    // Tilt calculations
    const tiltX = (0.5 - py) * 12; // max tilt 12 degrees
    const tiltY = (px - 0.5) * 12;

    card.style.transform = `translateY(-5px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
  });
}

function closeFlowerStage() {
  clearInterval(flowerSparkleInterval);
  const overlay = document.getElementById('proposalOverlay');
  if (overlay) {
    overlay.style.transition = 'opacity 1s ease';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.classList.add('hidden');
      // Final celebration confetti burst in the main app
      startConfetti(120);
      setTimeout(stopConfetti, 4000);
    }, 1000);
  }
}

function spawnSidoarjoHearts() {
  const container = document.getElementById('mapStageContainer');
  if (!container) return;

  let count = 0;
  const interval = setInterval(() => {
    const overlay = document.getElementById('proposalOverlay');
    if (overlay && !overlay.classList.contains('hidden') && count < 25) {
      const h = document.createElement('div');
      h.className = 'sparkle-heart';
      h.innerHTML = ['💖', '💗', '💓', '🌹', '🌸'][Math.floor(Math.random() * 5)];
      // Position around Sidoarjo coordinate (approx 77.25% left, 55% top relative to map-stage width/height)
      h.style.left = `calc(77.25% + ${(Math.random() - 0.5) * 40}px)`;
      h.style.top = `calc(55% + ${(Math.random() - 0.5) * 40}px)`;
      h.style.fontSize = Math.random() * 1.5 + 1.2 + 'rem';
      h.style.zIndex = '100';
      container.appendChild(h);
      setTimeout(() => h.remove(), 2000);
      count++;
    } else {
      clearInterval(interval);
    }
  }, 150);
}

function spawnProposalPetals() {
  const container = document.getElementById('proposalPetals');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = Math.random() * 12 + 8 + 'px';
    p.style.height = p.style.width;
    p.style.animationDelay = Math.random() * 6 + 's';
    p.style.animationDuration = Math.random() * 4 + 4 + 's';
    container.appendChild(p);
  }
}

function spawnSparkleHearts() {
  const stage = document.querySelector('.doodle-card');
  if (!stage) return;
  let count = 0;
  const interval = setInterval(() => {
    const overlay = document.getElementById('proposalOverlay');
    if (overlay && !overlay.classList.contains('hidden') && count < 18) {
      const h = document.createElement('div');
      h.className = 'sparkle-heart';
      h.innerHTML = ['💖', '💗', '💓', '🌸'][Math.floor(Math.random() * 4)];
      // Position around the big beating heart (approx 50% left, 55% top)
      h.style.left = `calc(50% + ${(Math.random() - 0.5) * 60}px)`;
      h.style.top = `calc(55% + ${(Math.random() - 0.5) * 60}px)`;
      stage.appendChild(h);
      setTimeout(() => h.remove(), 1500);
      count++;
    } else {
      clearInterval(interval);
    }
  }, 400);
}

function init3DTilt() {
  const cards = document.querySelectorAll('.reason-card, .gallery-card, .letter-card, .surprise-card-3d');
  cards.forEach(card => {
    // Inject the reflections overlay (card-shine)
    let shine = card.querySelector('.card-shine');
    if (!shine) {
      shine = document.createElement('div');
      shine.className = 'card-shine';
      card.appendChild(shine);
    }

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const px = x / rect.width;
      const py = y / rect.height;

      // Rotations: X depends on Y mouse offset, Y depends on X mouse offset
      const rx = (0.5 - py) * 16;
      const ry = (px - 0.5) * 16;

      // Apply translateZ to direct children for 3D depth parallax layers
      const icon = card.querySelector('.reason-icon, .surprise-box-icon, .gallery-emoji, .letter-deco');
      const text = card.querySelector('.reason-title, .reason-text, .card-front, .card-back-title, .card-back-text, .gallery-overlay, .letter-body');

      if (icon) icon.style.transform = 'translateZ(40px)';
      if (text) text.style.transform = 'translateZ(20px)';

      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.03, 1.03, 1.03)`;
      shine.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255, 255, 255, 0.12) 0%, transparent 65%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      shine.style.background = 'transparent';

      const icon = card.querySelector('.reason-icon, .surprise-box-icon, .gallery-emoji, .letter-deco');
      const text = card.querySelector('.reason-title, .reason-text, .card-front, .card-back-title, .card-back-text, .gallery-overlay, .letter-body');
      if (icon) icon.style.transform = 'translateZ(0px)';
      if (text) text.style.transform = 'translateZ(0px)';
    });
  });
}

function toggleEnvelope() {
  const env = document.querySelector('.envelope-wrapper');
  if (env) {
    env.classList.toggle('open');
    playBoom(); // plays a soft sound effect on open/close
  }
}

/* ============================================================
   BOOT
   ============================================================ */
window.addEventListener('DOMContentLoaded', startCountdown);
