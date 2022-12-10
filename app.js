const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/userSchema");
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

const BASE_URI =
  "mongodb+srv://annasahmed:eat160902@cluster0.h8eob58.mongodb.net/test";

mongoose
  .connect(BASE_URI)
  .then((response) => {
    console.log("mongodb running");
  })
  .catch((error) => {
    console.log(error, "error");
  });


app.get("/api/user/:id", (request, response, next) => {
  const { id } = request.params;
  userModel.findById(id, (error, data) => {
    if (error) {
      console.log(error);
      response.json({
        message: `error : ${error}`,
      });
      throw error;
    } else {
      response.json({ data, message: "all user" });
    }
  });
});

app.put("/api/put", (request, response) => {
  const { id, isActive } = request.body;
  userModel.findByIdAndUpdate(
    "63904965c89dd995f6804461",
    { isActive: false },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
        response.json({
          message: `error : ${error}`,
        });
        throw error;
      } else {
        response.json({ data, message: "data updated" });
      }
    }
  );
});

app.post("/api/post", (request, response) => {
  console.log(request.body);
  userModel.create(request.body, (err, data) => {
    if (err) {
      console.log(err);
      response.json({
        message: `error : ${err}`,
      });
    } else {
      response.json({ data, message: "find user" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
