import app from "./app";
import { createServer } from "http";
import { Server } from "socket.io";
import config from "./config";

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected to Virtubrowse Backend");
});

httpServer.listen(config.PORT, () => {
  console.log(`Virtubrowse Backend running on port ${config.PORT}`);
});
