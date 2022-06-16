import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const user = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
];
const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    }
];

server.post("/sign-up", (req, res) => {
    user.push(req.body);
    res.send("OK");
});

server.post("/tweets", (req, res) => {
    const tweetWithAvatar = {};
    tweetWithAvatar.username = req.body.username;
    tweetWithAvatar.avatar = user.find(user => user.username === req.body.username).avatar;
    tweetWithAvatar.tweet = req.body.tweet;
    tweets.push(tweetWithAvatar);
    res.send("OK");
});

server.get("/tweets", (req, res) => {
    const latestTweets = tweets.slice(-10);
    res.send(latestTweets);
});

server.listen(5000);

