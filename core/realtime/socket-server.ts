/**
 * @file socket-server.ts
 * @description Main Socket.io server for realtime signaling and presence.
 * As per sr.md: "S: Socket.io (Signaling & Tracking) - ইউজার সবার আগে মেইন VPS-1 এর সাথে কানেক্ট হয়।"
 */

import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Signaling for WebRTC
  socket.on("signal", (data) => {
    socket.to(data.target).emit("signal", {
      from: socket.id,
      signal: data.signal,
    });
  });

  // Presence Tracking
  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    io.to(roomId).emit("user-joined", { userId: socket.id });
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = process.env.REALTIME_PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Realtime Signaling Server running on port ${PORT}`);
});
