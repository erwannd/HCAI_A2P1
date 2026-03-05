const inputField = document.getElementById('user-input')
const sendBtn = document.getElementById('send-btn')
const messagesContainer = document.getElementById('messages')

const sendMessage = () => {
    let userMessage = inputField.value.trim();
    if (userMessage === "") {
        alert("You submitted an empty message");
    } else {
        const elem = document.createElement('div');
        elem.classList.add('message', 'user');

        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = userMessage;

        elem.appendChild(bubble);
        messagesContainer.appendChild(elem);
    }
    inputField.value = '';
}

sendBtn.addEventListener('click', sendMessage);