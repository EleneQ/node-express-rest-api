import express from "express";

const router = express.Router();

//all routes in here are starting with /users beuse of this in the index.js file: app.use("/users", usersRoutes);

//creating routes we can send requests to and visit.
/*
  this is a get request made to the homepage. when you visit google.com, your browser makes a get request to the google.com domain. browsers can only make get requests. 
*/
router.get("/", (req, res) => {
  res.send("Hello");
});

export default router;
