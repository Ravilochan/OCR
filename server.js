// Declaring
const express = require("express");
const multer = require("multer");
const app = express();
const fs = require("fs");
const pdf = require("pdfkit");
var Tesseract = require("tesseract.js");

//middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const PORT = process.env.PORT | 5000;

var Storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __dirname + "/images");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

var upload = multer({
  storage: Storage,
  fileFilter: function(req, file, cb) {
    checkfiletype(file, cb);
  }
}).single("image");

//checkfiletype function
function checkfiletype(file, cb) {
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(file.originalname);

  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(" Error : Images Only !");
  }
}

//route
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/upload", (req, res) => {
  console.log(req.file);
  upload(req, res, err => {
    if (err) {
      res.render("index", { msg: err });
    } else {
      if (req.file == undefined) {
        res.render("index", {
          msg: " Image not Selected !"
        });
      } else {
        console.log(req.file);
        var image = fs.readFileSync(
          __dirname + "/images/" + req.file.originalname,
          {
            encoding: null
          }
        );
        Tesseract.recognize(image)
          .progress(function(p) {
            console.log("progress", p);
          })
          .then(function(result) {
            // res.send(result.text);
            res.render("display", {
              data: result.text,
              path: __dirname + "/images/" + req.file.originalname
            });

            var myDoc = new pdf();
            myDoc.pipe(
              fs.createWriteStream(`./pdfs/${req.file.originalname}.pdf`)
            );
            myDoc
              .font("Times-Roman")
              .fontSize(24)
              .text(`${result.text}`, 100, 100);
            myDoc.end();
            const downloadpath =
              __dirname + "/pdfs/" + req.file.originalname.pdf;
            app.get("/download", (req, res) => {
              const file = `./pdfs/${req.file.originalname}.pdf`;
              res.download(downloadpath);
              res.download(file);
            });
          });
      }
    }
  });
});

app.get("/download", (req, res) => {
  // const file = `./pdfs/${req.file.originalname}.pdf`;
  res.download(downloadpath);
});

app.get("/showdata", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
