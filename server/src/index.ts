import express from "express";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

let lists: any[] = [];

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.post("/save", (req, res) => {
  lists = req.body.lists;
  return res.json({ success: true });
});

app.get("/load", (req, res) => res.json({ lists }));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(port, () =>
  console.log(`Kanban backend running on http://localhost:${port}!`)
);
