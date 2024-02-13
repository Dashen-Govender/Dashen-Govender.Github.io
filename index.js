import express from "express";

const app = express();
const port = 5000;
app.use(express.static("Assets"));
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/services", (req, res) => {
  res.render("services.ejs");
});

app.get("/solutions", (req, res) => {
  res.render("solutions.ejs");
});

app.get("/clients", (req, res) => {
  res.render("clients.ejs");
});

app.get("/social", (req, res) => {
  res.render("social.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on port ${port}`);
});
