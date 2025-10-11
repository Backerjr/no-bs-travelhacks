const insightsGrid = document.getElementById('insights-grid');
const toursTableBody = document.querySelector('#tours-table tbody');
const chatWidget = document.getElementById('chat-widget');
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

async function fetchInsights() {
    if (!insightsGrid) return;
    try {
        const response = await fetch('/api/insights');
        const insights = await response.json();

        insightsGrid.innerHTML = insights
            .map(
                (insight) => `
                <article class="insight-card">
                    <span class="insight-stat">${insight.stat}</span>
                    <h3>${insight.title}</h3>
                    <p>${insight.description}</p>
                </article>
            `
            )
            .join('');
    } catch (error) {
        insightsGrid.innerHTML = '<p class="error">We\'ll load the data-backed hacks in a moment.</p>';
    }
}

async function fetchTours() {
    if (!toursTableBody) return;
    try {
        const response = await fetch('/api/tours');
        const tours = await response.json();

        toursTableBody.innerHTML = tours
            .map(
                (tour) => `
                <tr>
                    <td>
                        <strong>${tour.name}</strong>
                        <span class="tour-description">${tour.description}</span>
                    </td>
                    <td>${tour.duration}</td>
                    <td>${tour.best_time}</td>
                    <td>${tour.price}</td>
                </tr>
            `
            )
            .join('');
    } catch (error) {
        toursTableBody.innerHTML = '<tr><td colspan="4" class="error">Tour data is taking a break. Try again soon.</td></tr>';
    }
}

function appendMessage(content, sender = 'bot') {
    const message = document.createElement('div');
    message.classList.add('chat-message', sender);
    message.textContent = content;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleChatSubmit(event) {
    event.preventDefault();
    const question = chatInput.value.trim();
    if (!question) return;

    appendMessage(question, 'user');
    chatInput.value = '';

    try {
        const response = await fetch('/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question }),
        });
        const data = await response.json();
        appendMessage(data.answer || 'I\'ll have more intel soon.', 'bot');
    } catch (error) {
        appendMessage('The connection dropped—give it another go in a few seconds.', 'bot');
    }
}

function openChat() {
    chatWindow.classList.remove('hidden');
    chatWidget.classList.add('open');
    chatInput.focus();
}

function closeChat() {
    chatWindow.classList.add('hidden');
    chatWidget.classList.remove('open');
}

if (chatToggle) {
    chatToggle.addEventListener('click', () => {
        if (chatWindow.classList.contains('hidden')) {
            openChat();
        } else {
            closeChat();
        }
    });
}

if (chatClose) {
    chatClose.addEventListener('click', closeChat);
}

if (chatForm) {
    chatForm.addEventListener('submit', handleChatSubmit);
}

fetchInsights();
fetchTours();
