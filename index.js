import express from "express";
import bodyParser from "body-parser"; //allows us to take in incoming post request bodies
import usersRoutes from "./routes/users.js";

/* this project is for handling users */
/* 
  this file handles just the setup of the server, not the routes. the routes are in another file.
*/

const app = express();
const PORT = process.env.PORT || 5000;

/* 
  the body-parser middleware is used to parse JSON data from the request body, allowing you to handle POST requests that send JSON data in the body of the post request to create new users.
*/
app.use(bodyParser.json());

/*
  every route we have in the users file will be prefixed with /users because we have that specified here. we're doing this because every endpoint/route should start with /users because we're working with users in this application.
*/
app.use("/users", usersRoutes);

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
