const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")(
  "sk_test_51IsBIOCsHPQK8foPl4Us8EiMZtRTxZAC3BE1NEqEs1O1dMnabM2t0VwrVJe0LJZ8ZywfTQNZIgMXMJOSdj21Cdu700GQbhJ30I"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("asdasd"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(total);
  const paymantIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymantIntent.client_secret,
  });
});

// app.post("/payments/create", (req, res) => {
//   console.log("ss");
// });

exports.api = functions.https.onRequest(app);
