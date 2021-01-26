const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IDcemDalhLGaLp7u5uQPWdzLKavKimRSnWESoeQzHNcDa2NnPzUUpJOLNXEPzyNBQTeIDv0TUgjBKQSayPbCcpW007rb9dXtz");
//API

// -App Config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// -Listen cmd
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/my--clone-6f40a/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

