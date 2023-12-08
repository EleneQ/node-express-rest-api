import { v4 as uuidv4 } from "uuid";

/*
//this is a mock database that has mock users stored in it.
const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];
*/
/* 
  the users array will be empty every time we restart the server because the data isn't actually saved persistently. For that, we'd have to use something like MongoDB.
*/
let users = [];

//creating routes we can send requests to and visit.
/*
  this is a get request made to the homepage. when you visit google.com, your browser makes a get request to the google.com domain. browsers can only make get requests, that's why tools like postman with which you can make other kinds of requests are so useful.
*/
export const getUsers = (req, res) => {
  res.send(users);
};

//sending data from the client to the server to create a add a new user to the mock users database.
export const createUser = (req, res) => {
  const user = req.body;

  /* 
    created a new user object from the body of the get request, plus a unique id.
  */
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added to the database`);
};

//get a user based on id
export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

//remove the user with the specified id from the array
export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database`);
};

//update user aka partially modify a user object
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  //user to be updated
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};
