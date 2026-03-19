// ADD MESSAGE
function addMsg(containerId, role, text) {
  const c = document.getElementById(containerId);

  if (!c) return;

  const div = document.createElement('div');
  div.className = 'msg ' + role;

  div.innerHTML = `
    <div class="msg-label">${role === 'bot' ? 'GuardianBot' : 'You'}</div>
    <div class="msg-bubble">${text}</div>
  `;

  c.appendChild(div);
  c.scrollTop = c.scrollHeight;
}

// TYPING INDICATOR
function addTyping(containerId) {
  const c = document.getElementById(containerId);

  const div = document.createElement('div');
  div.className = 'msg bot';
  div.id = 'typing-indicator';

  div.innerHTML = `
    <div class="msg-label">GuardianBot</div>
    <div class="typing"><span></span><span></span><span></span></div>
  `;

  c.appendChild(div);
  c.scrollTop = c.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

// MAIN FUNCTION
async function sendMessage() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();

  if (!msg) return;

  input.value = '';

  addMsg('chat-messages', 'user', msg);
  addTyping('chat-messages');

  try {
    const res = await sendToBackend('chat', { message: msg });

    removeTyping();

    addMsg('chat-messages', 'bot', res.reply);

    // stats update
    if (res.reply.includes("HIGH")) {
      stats.scams++;
      stats.score += 10;
    } else if (res.reply.includes("MEDIUM")) {
      stats.scams++;
      stats.score += 5;
    }

    updateStats();

  } catch (err) {
    removeTyping();
    addMsg('chat-messages', 'bot', "⚠ Error connecting to server");
  }
}