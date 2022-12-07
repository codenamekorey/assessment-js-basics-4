const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune } = require('./controller')
const { getPlayers, postPlayer} = require('./teamController')


app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/players", getPlayers);

app.post('/api/players', postPlayer);

app.listen(4000, () => console.log("Server running on 4000"));
