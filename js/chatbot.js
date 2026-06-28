/* ==========================================================
   PORTFOLIO COPILOT — CONTROLLER
   ----------------------------------------------------------
   Button-driven only. No free text input, no keyword
   matching, no scoring. Every click maps to one fixed
   answer from qa-data.js.
========================================================== */

const assistant = document.getElementById("assistant-window");
const toggle = document.getElementById("assistant-toggle");
const closeButton = document.getElementById("assistant-close");
const messages = document.getElementById("assistant-messages");

/* ======================================================
   OPEN / CLOSE
====================================================== */

toggle.addEventListener("click", () => {
  assistant.classList.toggle("open");
});

closeButton.addEventListener("click", () => {
  assistant.classList.remove("open");
});

/* ======================================================
   SCROLL
====================================================== */

function scrollBottom() {
  messages.scrollTop = messages.scrollHeight;
}

/* ======================================================
   RENDER: USER QUESTION BUBBLE
====================================================== */

function addUserBubble(text) {
  const div = document.createElement("div");
  div.className = "user-message";
  div.textContent = text;
  messages.appendChild(div);
  scrollBottom();
}

/* ======================================================
   RENDER: BOT ANSWER BUBBLE
====================================================== */

function addBotBubble(html) {
  const div = document.createElement("div");
  div.className = "bot-message";
  div.innerHTML = html;
  messages.appendChild(div);
  scrollBottom();
}

/* ======================================================
   RENDER: TOPIC BUTTONS (LEVEL 1)
====================================================== */

function renderTopicMenu() {
  const wrap = document.createElement("div");
  wrap.className = "quick-prompts";

  TOPICS.forEach(topic => {
    const btn = document.createElement("button");
    btn.className = "prompt-btn";
    btn.type = "button";
    btn.textContent = topic.label;
    btn.addEventListener("click", () => openTopic(topic.id));
    wrap.appendChild(btn);
  });

  messages.appendChild(wrap);
  scrollBottom();
}

/* ======================================================
   RENDER: SUB-QUESTION BUTTONS (LEVEL 2)
====================================================== */

function renderQuestionMenu(topicId) {
  const topic = getTopic(topicId);
  if (!topic) return;

  const wrap = document.createElement("div");
  wrap.className = "quick-prompts";

  topic.questions.forEach(q => {
    const btn = document.createElement("button");
    btn.className = "prompt-btn";
    btn.type = "button";
    btn.textContent = q.question;
    btn.addEventListener("click", () => askQuestion(topicId, q.id));
    wrap.appendChild(btn);
  });

  const backBtn = document.createElement("button");
  backBtn.className = "prompt-btn prompt-btn-back";
  backBtn.type = "button";
  backBtn.textContent = "← Back to topics";
  backBtn.addEventListener("click", () => {
    addBotBubble("What else would you like to know?");
    renderTopicMenu();
  });
  wrap.appendChild(backBtn);

  messages.appendChild(wrap);
  scrollBottom();
}

/* ======================================================
   FLOW: OPEN A TOPIC
====================================================== */

function openTopic(topicId) {
  const topic = getTopic(topicId);
  if (!topic) return;

  addUserBubble(topic.label);

  setTimeout(() => {
    addBotBubble(`Here's what I can tell you about <strong>${topic.label}</strong>:`);
    renderQuestionMenu(topicId);
  }, 350);
}

/* ======================================================
   FLOW: ASK A FIXED QUESTION
====================================================== */

function askQuestion(topicId, questionId) {
  const q = getQuestion(topicId, questionId);
  if (!q) return;

  addUserBubble(q.question);

  const typingId = showTyping();

  setTimeout(() => {
    removeTyping(typingId);

    let html = q.answer;

    if (q.links && q.links.length) {
      html += `<div class="assistant-actions">`;
      q.links.forEach(link => {
        const downloadAttr = link.download ? "download" : "";
        html += `<a href="${link.url}" target="_blank" ${downloadAttr}>${link.label} ↗</a>`;
      });
      html += `</div>`;
    }

    addBotBubble(html);
    renderQuestionMenu(topicId);

  }, 500);
}

/* ======================================================
   TYPING INDICATOR
====================================================== */

function showTyping() {
  const id = "typing-" + Date.now();
  const div = document.createElement("div");
  div.className = "bot-message";
  div.id = id;
  div.innerHTML = `
    <div class="typing-message">
      <span></span><span></span><span></span>
    </div>
  `;
  messages.appendChild(div);
  scrollBottom();
  return id;
}

function removeTyping(id) {
  const node = document.getElementById(id);
  if (node) node.remove();
}

/* ======================================================
   INITIAL GREETING
====================================================== */

window.addEventListener("load", () => {
  addBotBubble(
    "👋 Hi! I'm Mehul's portfolio assistant. Pick a topic below to get started."
  );
  renderTopicMenu();
});
