import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

const user = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
];
const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    }
];

server.post("/sign-up", (req, res) => {
    user.push(req.body);
    res.send("OK");
});



server.listen(5000);

