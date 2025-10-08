import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Avaturn session route
app.get("/avaturn-session", (req, res) => {
  const userId = "example_user"; // later you can pass real player ID
  const sessionUrl = `https://avaturn.me/api/session?userId=${userId}`;
  res.json({ url: sessionUrl });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
