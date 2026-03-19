// SCENARIOS
const SCENARIOS = {
  upi: { title: "Fake UPI Helpdesk" },
  lottery: { title: "Lottery Scam" },
  grandchild: { title: "Emergency Scam" },
  gaming: { title: "Gaming Reward Scam" }
};

let activeScenario = 'upi'; // track selected scenario

// START SIMULATION
async function startSimulation() {
  const chatBox = document.getElementById('sim-chat');
  const messages = document.getElementById('sim-messages');

  if (!chatBox || !messages) return;

  // get selected scenario from whichever card is selected
  const selected = document.querySelector('.scenario-card.selected');
  if (selected) activeScenario = selected.dataset.scenario;

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

// SEND USER MESSAGE IN SIM
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