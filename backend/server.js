require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

//middleware
app.use(express.json());

// routes
// This is a middleware for this function
/*app.get("/", (request, response) => {
  response.json({ message: "Welcome to the app" });
});*/

app.use("/api/workouts", workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening to the port", process.env.PORT);
});
