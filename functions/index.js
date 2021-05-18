const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IsBIOCsHPQK8foPl4Us8EiMZtRTxZAC3BE1NEqEs1O1dMnabM2t0VwrVJe0LJZ8ZywfTQNZIgMXMJOSdj21Cdu700GQbhJ30I"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("heloooo");
});

exports.api - functions.https.onRequest(app);
