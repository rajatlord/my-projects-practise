const WebSocket = require("ws");
const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let clients = [];

wss.on("connection", (ws) => {
    console.log("New client connected!");
    clients.push(ws);

    ws.on("message", (message) => {
        console.log("Received:", message);
        
        // Broadcast to all clients
        clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected!");
        clients = clients.filter(client => client !== ws);
    });
});

server.listen(8080, () => {
    console.log("WebSocket server running on http://localhost:8080");
});
