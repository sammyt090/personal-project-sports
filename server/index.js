require('dotenv').config()
const express = require ('express')
const app = express()
const massive = require ('massive')
const session = require ('express-session')
const ctr1 = require('./controllers/authController')
const ctr2 = require('./controllers/postControllers')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())

app.use(session ({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    maxAge: 24 * 60 * 60 * 1000

}))


app.post('/auth/register', ctr1.registerUser)
app.post('/auth/login', ctr1.loginUser)
app.delete('/auth/logout', ctr1.logoutUser)


app.get('/dashboard/posts', ctr2.getPosts)
app.post('/event/posts', ctr2.createPost)
app.get('/dashboard/post/:id', ctr2.getPost)
app.delete('/dashboard/post/:id', ctr2.deletePost)
app.put('/dashboard/post/:id', ctr2.editPost)








massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log("DB is up and running");
    app.listen(SERVER_PORT, () => console.log(`Kickin it off on ${SERVER_PORT}`))
}).catch(err=> console.log(err));



