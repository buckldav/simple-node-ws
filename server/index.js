const WebSocket = require("ws");

const socket = new WebSocket.Server({
  port: 8080,
});

socket.on("connection", (ws) => {
  ws.on("message", (msg) => {
    console.log("received: %s", msg);
    socket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        if (client === ws) {
          client.send(`<li class="right">${msg}</li>`);
        } else {
          client.send(`<li class="left">${msg}</li>`);
        }
      }
    });
  });

  ws.send("welcome to the jungle");
});

console.log("server on ws://localhost:8080");
