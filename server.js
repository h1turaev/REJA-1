const http = require("http");
const mongodb = require("mongodb");

// TCP - transmission control protocol
let db;
const connectionString = "mongodb+srv://Ray:19970419%40h@apollo11.0nx2yso.mongodb.net/";
// CALL qismi
mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("Error on connection MongoDB", err);
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
        console.log(`Server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
});

    }
});

