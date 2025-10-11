document.addEventListener('DOMContentLoaded', () => {
    const toursList = document.getElementById('tours-list');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    // Fetch and display tours
    fetch('/api/tours')
        .then(response => response.json())
        .then(tours => {
            tours.forEach(tour => {
                const tourCard = document.createElement('div');
                tourCard.className = 'tour-card';
                tourCard.innerHTML = `
                    <h3>${tour.name}</h3>
                    <p>${tour.description}</p>
                `;
                toursList.appendChild(tourCard);
            });
        });

    // Handle chat functionality
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const question = chatInput.value.trim();
        if (question === '') return;

        addMessage('user', question);
        chatInput.value = '';

        fetch('/api/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question })
        })
        .then(response => response.json())
        .then(data => {
            addMessage('bot', data.answer);
        });
    }

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});