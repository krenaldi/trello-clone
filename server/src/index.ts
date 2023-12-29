import express from "express"
import cors from 'cors'

const app = express()

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000

let lists:any[] = [];

app.post("/save", (req, res) => {
  lists = req.body.lists
  return res.json({ success: true })
})

app.get("/load", (req, res) => res.json({ lists }))

app.listen(port, () =>
  console.log(`Kanban backend running on http://localhost:${port}!`)
)
