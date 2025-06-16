console.log('Web serverni boshlash');
// Express frameworkini chaqirish
const express = require("express"); 
const res = require("express/lib/response");
// app(object) - Bu yerda intance, "Instance" degani — biror narsaning ishlaydigan, real nusxasi.
const app = express();              
const fs = require("fs");


// JSON formatidagi datani object holatiga aylantirish
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
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


// MongoDB Chaqirish
    const db = require("./server").db();
    const mongodb = require("mongodb");

// 1.Kirish code
 // public - bu papka nomi, u yerda statik fayllar joylashgan va har qanday browserlardan keladigan zaproslarga public papkasidagi fayllar orqali javob qaytaradi.
    app.use(express.static("public")); 
 // Kirib kelayotgan JSON formatidagi datalarni objectga holatiga aylantirib beradi. client hamda server o'rtasidagi datalar JSON formatida boladi.
    app.use(express.json());   
// Traditional Form Request ya'ni html formdan keladigan zaproslarni object holatida qabul qiladi. Agar bu kodni yozmasak formdan keladigan zaproslarni express qabul qilmaydi neglect qiladi yani ignore qiladi.                        
    app.use(express.urlencoded({ extended: true }));    





// 2.Session code
// 3.View code
// BSSR - bu back-end server side rendering degani, yani serverda render qilingan html ni back-endda yasab uni front-endga yani client browserga yuboramiz.
// BSSR ni yaratish uchun biz ejs templating engine dan foydalanamiz. EJS - bu JavaScript templating engine bo'lib, u HTML ichida JavaScript kodlarini yozish imkonini beradi va dinamik kontent yaratishga yordam beradi.

app.set("views", "views");      
// EJS da front-endni yasaymiz back-end ichida.
app.set("view engine", "ejs");   





// 4. Routing code
// borwser.js da reja loyihani frontendini yasayapmiz
app.post("/create-item", (req, res) => {
    console.log("==== CREATE ====");
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja },  (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});



// READ OPERATION 
app.get('/', function (req, res) {
    console.log("==== READ ====");
    console.log("user entered /")
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("Something went wrong");
        } else {
            res.render("reja", { items: data });
        }
    });
});



// UPDATE OPERATION
app.post("/edit-item", (req, res) => {
    console.log("==== EDIT ====");
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, {$set: { reja: data.new_input } },
    function (err, data) {
        res.json({ state: "Success" });
    });
});



// DELETE OPERATION 
app.post("/delete-item", (req, res) => {
    console.log("==== DELETE ====");
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function (err, data) {
        res.json({ state: "Success"});
    });
    
});



// DELETE ALL OPERATION
app.post("/delete-all", (req, res) => {
    console.log("==== DELETE ALL ====");
    if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
    res.json({ state: "Hamma Rejalarni O'chirildi"});
    });
  }
});



app.get("/author", (req, res) => {
    res.render("author", {user: user});
});


module.exports = app;
