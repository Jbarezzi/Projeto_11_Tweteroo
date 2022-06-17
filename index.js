import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const user = [
    {
        username: "tanjiro",
        avatar: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2022/05/legiao_q81vJiBwpAEo.png.jpeg"
    }
];
const tweets = [
    {
        username: "tanjiro",
        tweet: "só pra ter o que começar"
    }
];

server.post("/sign-up", (req, res) => {
    user.push(req.body);
    res.send("OK");
});

server.post("/tweets", (req, res) => {
    tweets.push(req.body);
    res.send("OK");
});

server.get("/tweets", (_req, res) => {
    const latestTweets = tweets.slice(-10);
    latestTweets.reverse();
    for(let i of latestTweets) {
        i.avatar = user.find(user => user.username === i.username).avatar;
    }
    res.send(latestTweets);
});

server.listen(5000);