const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here


//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/instaTutor", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log("server listening on http://localhost:" + PORT );
});
