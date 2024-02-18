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

// app.get("/services", (req, res) => {
//   res.render("services.ejs");
// });

// app.get("/solutions", (req, res) => {
//   res.render("solutions.ejs");
// });

// app.get("/clients", (req, res) => {
//   res.render("clients.ejs");
// });

// app.get("/social", (req, res) => {
//   res.render("social.ejs");
// });

// app.get("/contact", (req, res) => {
//   res.render("contact.ejs");
// });

// app.get("/terms", (req, res) => {
//   res.render("terms.ejs");
// });

// app.get("/privacy", (req, res) => {
//   res.render("privacy.ejs");
// });

// app.get("/tab", (req, res) => {
//   const anchor = req.body["Anchor"];
//   console.log("anchor");
//   res.render(`${anchor.toLowerCase()}.ejs`);
// });

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on port ${port}`);
});
