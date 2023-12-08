import express from "express";
import bodyParser from "body-parser"; //allows us to take in incoming post request bodies

const app = express();
const PORT = process.env.PORT || 5000;

//creating routes we can send requests to and visit.
//this is a get request to the homepage.
app.get("/", (req, res) => {
  res.send("Hello from Homepage");
});

/* 
  this just says that we're gonna use json data in our whole application, which is a common format for sending and requesting data from/to a rest api.
*/
app.use(bodyParser.json());

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
