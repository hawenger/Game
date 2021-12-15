const express = require("express");
const cors = require("cors");
const socketIo = require("socket.io");
const app = express();
app.use(cors());
const http = require("http");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
app.use(index);
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(cors(server));

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const response = new Date();
  socket.emit("FromAPI", response);
};
//server.get("/index.html", function (req, res, next) {
// res.json({ msg: "This is CORS-enabled for all origins!" });
//});
server.listen(port, () => console.log(`Listening on port ${port}`));
//Need to add proxy for Cors error
