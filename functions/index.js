const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');
const firebase = require('firebase');


const { getAllScreams, postOneScream } = require('./handlers/screams')
const { signup, login, uploadImage, addUserDetails } = require("./handlers/users")
const { decode } = require('firebase-functions/lib/providers/https');


//scream routes
app.get("/screams", getAllScreams);
//posting a new scream to the db
app.post("/scream", FBAuth, postOneScream);
app.post('/user/image', FBAuth, uploadImage);

app.post("/user", FBAuth, addUserDetails)
//users routes
app.post("/signup", signup);
app.post('/login', login);



exports.api = functions.https.onRequest(app);
