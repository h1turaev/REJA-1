console.log('Web serverni boshlash');
const express = require("express"); // Express frameworkini chaqirish
const app = express();              // app(object) - Bu yerda intance, "Instance" degani — biror narsaning ishlaydigan, real nusxasi.
const http = require("http");
const fs = require("fs"); 

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)          // JSON formatidagi datani object holatiga aylantirish
    }
});


// Express kontekstida, bu degani:
// const app = express(); — bu yerda app Express ilovasining 
// instansiyasi (nusxasi) hisoblanadi.
// Ya'ni, express() funksiyasini chaqirganingda u:
// yangi "web server" yaratadi,
// bu serverga router, middleware, sozlamalar, va boshqa 
// xususiyatlar qo‘shish imkonini beradi.app — bu Express 
// ilovasining "instance"i, u orqali routing, middleware, sozlamalar va HTTP javoblar ishlanadi.


// 1.Kirish code
app.use(express.static("public"));  // public - bu papka nomi, u yerda statik fayllar joylashgan va har qanday browserlardan keladigan zaproslarga public papkasidagi fayllar orqali javob qaytaradi.
app.use(express.json());                            // Kirib kelayotgan JSON formatidagi datalarni objectga holatiga aylantirib beradi. client hamda server o'rtasidagi datalar JSON formatida boladi.
app.use(express.urlencoded({ extended: true }));    // Traditional Form Request ya'ni html formdan keladigan zaproslarni object holatida qabul qiladi. Agar bu kodni yozmasak formdan keladigan zaproslarni express qabul qilmaydi neglect qiladi yani ignore qiladi.





// 2. Session code
// 3.View code
// BSSR - bu back-end server side rendering degani, yani serverda render qilingan html ni back-endda yasab uni front-endga yani client browserga yuboramiz.
// BSSR ni yaratish uchun biz ejs templating engine dan foydalanamiz. EJS - bu JavaScript templating engine bo'lib, u HTML ichida JavaScript kodlarini yozish imkonini beradi va dinamik kontent yaratishga yordam beradi.

app.set("views", "views");      
app.set("view engine", "ejs");   // EJS da front-endni yasaymiz back-end ichida.





// 4. Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
res.json({test:"success"});
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
});


app.get('/', function (req, res) {
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`Server is running succesfully on port: ${PORT}`);
    
});



