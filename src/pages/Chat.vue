<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { io } from 'socket.io-client';

interface IMessage {
    author: string;
    message: string;
    timestamp: number;
}

const API_URL = import.meta.env.VITE_API_URL;
const socket = io(API_URL)

const name = ref('')
const newMessage = ref('')
const messages = ref<IMessage[]>([])
const isConnected = ref(false)

onMounted(async () => {
    try {
        const response = await fetch(`${API_URL}/messages`);

        // Se a rota não existir ou o servidor cair, ele para aqui
        if (!response.ok) throw new Error("Erro ao buscar mensagens");

        messages.value = await response.json();
    } catch (err) {
        console.error("Falha na API:", err);
    }
    socket.on('connect', () => isConnected.value = true);
    socket.on('disconnect', () => isConnected.value = false);

    socket.on('newMessage', (data: IMessage) => {
        messages.value.push(data)
    })
})

const sendMessage = async () => {
    if (!name.value || !newMessage.value) return;

    const payload = {
        author: name.value,
        message: newMessage.value
    };

    await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    newMessage.value = '';
};

</script>

<template>
    <p :class="['status', isConnected ? 'online' : 'offline']">
        {{ isConnected ? '● Servidor Online' : '○ Conectando ao servidor...' }}
    </p>
    <div class="body">
        <input v-model="name" class="yn" id="yn" type="text" placeholder="Seu nome...">
        <div class="chat">
            <div v-for="msg in messages" :key="msg.timestamp"
                :class="['msg-wrapper', msg.author === name ? 'my-message' : 'others-message']">
                <div class="msg-item">
                    <small v-if="msg.author !== name">{{ msg.author }}</small>
                    <p>{{ msg.message }}</p>
                </div>
            </div>
        </div>
        <div class="digiting">
            <input v-model="newMessage" @keyup.enter="sendMessage" id="digiting" type="text"
                placeholder="Digite algo...">
            <Button @click="sendMessage"> > </Button>
        </div>
    </div>
</template>

<style>
.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 20px;
    font-size: 1.1rem;
    width: 95vw;
    max-width: 600px;
    box-sizing: border-box;
}

.yn,
.chat,
.digiting {
    min-width: 200px;
    width: 100%;
}

.digiting {
    display: flex;
    gap: 10px;
}

.yn {
    padding-top: 0;
}

input {
    flex: 1;
    padding: 12px 15px;
    outline: none;
    border-bottom: 1px solid var(--color-text);
    background: none;
    color: var(--color-text);
}

.digiting button {
    padding: 7px;
    aspect-ratio: 1/1;
}

.yn {
    margin-bottom: 5px;
    height: auto;
    text-align: center;
}

.chat {
    min-height: 650px;
    height: 100%;
    border: 1px solid #ccc;
    margin: 10px;
    overflow-y: auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #f9f9f9;
    border-radius: 8px;
}

.msg-wrapper {
    display: flex;
    width: 100%;
}

.my-message {
    justify-content: flex-end;
}

.others-message {
    justify-content: flex-start;
    /* Empurra para a esquerda */
}

.my-message {
    justify-content: flex-end;
}

.others-message {
    justify-content: flex-start;
}

.msg-item {
    max-width: 85%;
    padding: 8px 12px;
    border-radius: 12px;
    font-size: 0.95rem;
    position: relative;
}

.my-message .msg-item {
    background-color: #007bff;
    color: white;
    border-bottom-right-radius: 2px;
    /* Estilo de "rabinho" da bolha */
}

.others-message .msg-item {
    background-color: #e9e9eb;
    color: #333;
    border-bottom-left-radius: 2px;
}

.msg-item small {
    display: block;
    font-size: 0.7rem;
    margin-bottom: 4px;
    font-weight: bold;
    opacity: 0.8;
}

.msg-item p {
    margin: 0;
}

.status {
    position: absolute;
}

.online {
    color: #28a745;
}

.offline {
    color: #dc3545;
}

@media (max-width: 480px) {
    .body {
        padding: 10px;
    }

    .digiting input {
        padding: 10px;
        font-size: 0.9rem;
    }
}
</style>