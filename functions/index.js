const functions = require("firebase-functions");
const express = require ("express");
const cors = require ("cors");
const stripe = require ("stripe");
// const { app } = require("firebase-admin");
('sk_test_51Lt4dCCL7iVCiyXfEVvdTOwwYtqnzRpT9u5CFTQXGCtjOyD3JA8Hj7synwQjKGEwAlWl2xttqR3wCapkWEskiYUG00hjmavRsS')
// import { getFirestore } from "firebase-admin/firestore";
// App config
const app = express();

// Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/', (request,response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("payment request received BOOM FOR THIS AMOUNT *****", total); 

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: "usd",
    });

    //ok- created
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    });
});

//Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://127.0.0.1:5001/challenge-with-sunny/us-central1/api
