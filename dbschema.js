let db = {
    users: [
        {
            userId: 'dh23ggj5h32543j5gf43',
            email: 'user1@email.com',
            handle: "user1",
            createdAt: "2020-09-18T15:08:08.900Z",
            imageUrl: 'image/sdjklfjadlkjdfkl/sjdfklsdjskdl',
            bio: "hello my name is user, I like coffee",
            website: 'https://user1.com',
            location: 'portland OR'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this the scream body',
            createdAt: "2020-09-18T15:08:08.900Z",
            likeCount: 5,
            commentCount: 2
        }
    ],
    commments: [
        {
            userHandle: 'user',
            screamId: 'jkaljdkalfjlsdkajfjj',
            body: 'nice one friend!',
            createdAt: "2020-09-18T15:08:08.900Z",
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: "daklfjdasjflasdkfjlk",
            type: 'like | comment',
            createdAt: "2020-09-18T15:08:08.900Z"
        }
    ]
}

const userDetails = {
    //redux data
    credentials: {
        userId: 'dh23ggj5h32543j5gf43',
        email: 'user1@email.com',
        handle: "user1",
        createdAt: "2020-09-18T15:08:08.900Z",
        imageUrl: 'image/sdjklfjadlkjdfkl/sjdfklsdjskdl',
        bio: "hello my name is user, I like coffee",
        website: 'https://user1.com',
        location: 'portland OR'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'jkaljdkalfjlsdkajfjj'
        },
        {
            userHandle: 'user',
            screamId: '1234jkaljdka23lfjlsdkajfjj'
        }
    ]
}