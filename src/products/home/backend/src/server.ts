import express from "express";
import cors from "cors";
import { TunnelHandler } from "../../../core/zerobw/tunnel-handler";

const app = express();
const tunnel = new TunnelHandler();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "active", node: "home-back" });
});

app.post("/api/gateway", async (req, res) => {
  const { key } = req.body;
  const success = await tunnel.openTunnel(Buffer.from(key));
  res.json({ authorized: success });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Home Business Logic Server running on port ${PORT}`);
});
