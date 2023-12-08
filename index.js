import express from "express";
import bodyParser from "body-parser"; //allows us to take in incoming post request bodies
import usersRoutes from "./routes/users";

/* this project is for handling users */
/* 
  this file handles just the setup of the server, not the routes. the routes are in another file.
*/

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/users", usersRoutes);

/* 
  this just says that we're gonna use json data in our whole application, which is a common format for sending and requesting data from/to a rest api.
*/
app.use(bodyParser.json());

//creating routes we can send requests to and visit.
/*
  this is a get request made to the homepage. when you visit google.com, your browser makes a get request to the google.com domain. browsers can only make get requests. 
*/
app.get("/", (req, res) => {
  res.send("Hello from Homepage");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
