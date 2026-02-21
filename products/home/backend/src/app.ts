import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Main Root API
app.get("/", (req, res) => {
  res.json({
    system: "NepsenX V2.0",
    status: "Operational",
    node: "VPS-1 (Brain)",
    gateway: "Active",
  });
});

export default app;
