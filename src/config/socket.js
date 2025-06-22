// src/config/socket.js

export const setupSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("✅ New client connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });
};
