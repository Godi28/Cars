// requiring app from app.js and http
const app = require("../app.js");
const http = require("http");

// gettting port from environment and storing it as a variable
const port = process.env.PORT || 8080;
// setting port
app.set("port", port);
// creating http server for app
const server = http.createServer(app);
// setting server to listen on port 8080 and sending message to console
server.listen(port, () => console.log("Listening on port 8080"));
