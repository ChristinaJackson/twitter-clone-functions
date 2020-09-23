const functions = require('firebase-functions');
const app = require('express')();
const { getAllScreams, postOneScream } = require('./handlers/screams')
const { signup, login, uploadImage } = require("./handlers/users")
const FBAuth = require('./util/fbAuth');
const firebase = require('firebase');
const { decode } = require('firebase-functions/lib/providers/https');


//scream routes
app.get("/screams", getAllScreams);
//posting a new scream to the db
app.post("/scream", FBAuth, postOneScream);

//users routes
app.post("/signup", signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage)


exports.api = functions.https.onRequest(app);
