import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.post("/tab", (req, res) => {
  res.render(`${req.body.choice}.ejs`);
});

app.get("/terms", (req, res) => {
  res.render("terms.ejs");
});

app.get("/privacy", (req, res) => {
  res.render("privacy.ejs");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on port ${port}`);
});
