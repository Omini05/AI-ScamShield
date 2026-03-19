let selectedScenario = 'upi';
let simHistory = [];
let chatHistory = [];

let stats = {
  score: 0,
  sims: 0,
  scams: 0,
  p1: 0,
  p2: 0,
  p3: 0
};

function showTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  const tab = document.getElementById('tab-' + name);

  if (!tab) {
    console.error("Tab not found:", name);
    return;
  }

  tab.classList.add('active');

  document.querySelectorAll('.tab-btn').forEach(b => {
    if (
      b.textContent.toLowerCase().includes(name) ||
      (name === 'home' && b.textContent === 'Home')
    ) {
      b.classList.add('active');
    }
  });
}

function updateStats() {
  // safety checks
  if (!document.getElementById('score-val')) return;

  document.getElementById('score-val').textContent = stats.score;
  document.getElementById('sims-val').textContent = stats.sims;
  document.getElementById('scams-val').textContent = stats.scams;

  document.getElementById('p1').style.width = stats.p1 + '%';
  document.getElementById('p2').style.width = stats.p2 + '%';
  document.getElementById('p3').style.width = stats.p3 + '%';

  document.getElementById('p1-val').textContent = stats.p1 + '%';
  document.getElementById('p2-val').textContent = stats.p2 + '%';
  document.getElementById('p3-val').textContent = stats.p3 + '%';
}

function fillInput(text) {
  const input = document.getElementById('chat-input');
  if (input) {
    input.value = text;
    input.focus();
  }
}

function selectScenario(el, id) {
  document.querySelectorAll('.scenario-card').forEach(c => c.classList.remove('selected'));

  if (el) el.classList.add('selected');
  selectedScenario = id;
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function handleSimKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendSimMessage();
  }
}

// VERY IMPORTANT → prevents blank screen issue
window.onload = () => {
  showTab('home');
};