const SCENARIOS = {
  upi: { title: "Fake UPI Helpdesk" },
  lottery: { title: "Lottery Prize Call" },
  grandchild: { title: "Grandchild Emergency" },
  gaming: { title: "Free Gaming Reward" }
};

let activeScenario = 'upi';

function selectScenario(el, id) {
  document.querySelectorAll('.scenario-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  activeScenario = id;
}

async function startSimulation() {
  const chatBox = document.getElementById('sim-chat');
  const messages = document.getElementById('sim-messages');
  const title = document.getElementById('sim-title');

  if (!chatBox || !messages) return;

  if (title) title.textContent = SCENARIOS[activeScenario].title + ' — Active';

  chatBox.style.display = 'block';
  messages.innerHTML = '';

  addTyping('sim-messages');

  try {
    const res = await sendToBackend('start-sim', { scenario: activeScenario });
    removeTyping();
    addMsg('sim-messages', 'bot', res.reply);
  } catch (err) {
    removeTyping();
    addMsg('sim-messages', 'bot', '⚠ Could not start simulation');
  }
}

async function sendSimMessage() {
  const input = document.getElementById('sim-input');
  const msg = input.value.trim();

  if (!msg) return;

  input.value = '';

  addMsg('sim-messages', 'user', msg);
  addTyping('sim-messages');

  try {
    const res = await sendToBackend('sim', { message: msg, scenario: activeScenario });
    removeTyping();
    addMsg('sim-messages', 'bot', res.reply);

    stats.sims++;
    stats.score += 5;
    updateStats();
  } catch (err) {
    removeTyping();
    addMsg('sim-messages', 'bot', '⚠ Simulation error');
  }
}

function handleSimKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendSimMessage();
  }
}