const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');
const firebase = require('firebase');

const { getAllScreams,
    postOneScream,
    getScream,
    commentOnScream,
    likeScream,
    unlikeScream,
    deleteScream
} = require('./handlers/screams');

const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require("./handlers/users")
const { decode } = require('firebase-functions/lib/providers/https');
const { db } = require('./util/admin');


//scream routes
app.get("/screams", getAllScreams);
//posting a new scream to the db
app.post("/scream", FBAuth, postOneScream);
app.get('/scream/:screamId', FBAuth, getScream);
app.delete("/scream/:screamId/", FBAuth, deleteScream)
app.get("/scream/:screamId/like", FBAuth, likeScream)
app.get("/scream/:screamId/unlike", FBAuth, unlikeScream)
app.post('/scream/:screamId/comment', FBAuth, commentOnScream)


//users routes
app.post("/signup", signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);


exports.api = functions.https.onRequest(app);

exports.createNotificationOnLike = functions.firestore.document('likes/{id')
    .onCreate((snapshot) => {
        db.document(`/scream/${snapshot.data().screamId}`)
            .then((doc) => {
                if (doc.exists) {
                    return db.doc(`/notifications/${snapshot.id}`).set({
                        createdAt: new Date().toISOString(),
                        recipient: doc.data().userHandle,
                        sender: snapshot.data().userHandle,
                        type: 'like',
                        read: 'false',
                        screamId: doc.id
                    });
                }
            })
            .then(() => {
                return
            })
            .catch(err => {
                console.error(err);
                return
            });
    });

exports.deleteNotificationOnUnlike = functions.firestore.document('likes/{id}')
    .onDelete((snapshot) => {
        db.doc(`/notifications/${snapshot.id}`)
            .delete()
            .then(() => {
                return;
            })
            .catch(err => {
                console.error(err);
                return
            });
    })

exports.createNotificationOnComment = functions.firestore.document('/comments/{id}')
    .onCreate((snapshot) => {
        db.document(`/scream/${snapshot.data().screamId}`)
            .then((doc) => {
                if (doc.exists) {
                    return db.doc(`/notifications/${snapshot.id}`).set({
                        createdAt: new Date().toISOString(),
                        recipient: doc.data().userHandle,
                        sender: snapshot.data().userHandle,
                        type: 'comment',
                        read: 'false',
                        screamId: doc.id
                    });
                }
            })
            .then(() => {
                return
            })
            .catch(err => {
                console.error(err);
                return
            });
    })


