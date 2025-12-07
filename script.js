const chatBtn = document.getElementById('chat-btn');
const chatBox = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');
const sendMsg = document.getElementById('send-msg');
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');

// Show chat box
chatBtn.addEventListener('click', () => {
    chatBox.classList.remove('hidden');
});

// Close chat box
closeChat.addEventListener('click', () => {
    chatBox.classList.add('hidden');
});

// Send message
sendMsg.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message !== "") {
        // Add user message
        const userMsg = document.createElement('p');
        userMsg.innerHTML = `<strong>You:</strong> ${message}`;
        chatBody.appendChild(userMsg);

        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;

        // Clear input
        chatInput.value = "";

        // Simulate Lumi's response
        setTimeout(() => {
            const lumiMsg = document.createElement('p');
            lumiMsg.innerHTML = `<strong>Lumi:</strong> Thanks for your message! I'll get back to you shortly.`;
            chatBody.appendChild(lumiMsg);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
});

// Allow Enter key to send message
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMsg.click();
    }
});

