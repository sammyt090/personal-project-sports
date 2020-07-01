const {emailChecker} = require('../util')
const bcrypt = require('bcrypt')
const {sendEmail} = require('./emailAuth')
module.exports = {
    registerUser: async (req, res) => {
        const {username, password, first_name, last_name, profile_pic} = req.body
        const db = req.app.get('db')
        const result = await db.get_user(username)
        // console.log(!emailChecker(username));
        // return
        if (result[0] || !emailChecker(username) ){
            return res.status(409).send("Email already taken or not valid email")
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        
        const registeredUser = await db.register_user([username, hash, first_name, last_name, profile_pic])
        delete registeredUser[0].password
        req.session.user = {username: registeredUser[0].username, id: registeredUser[0].id, first_name: registeredUser[0].first_name,
        last_name: registeredUser[0].last_name, profile_pic: 'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg'}

        sendEmail(req)
        // req.session.user = newUserObj 
      
        res.status(200).send(req.session.user)
        

    },

    loginUser: async (req, res) => {
        const{username, password} = req.body
        const db = req.app.get('db')
        const result = await db.get_user(username)
        if(!result[0]){
            return res.status(404).send('User does not exist')
        }else {
            const authenticate = bcrypt.compareSync(password, result[0].password)
            delete result[0].password
            if (authenticate) {
                req.session.user = {
                    id: result[0].id,
                    username: result[0].username,
                    profile_pic: result[0].profile_pic,
                    first_name: result[0].first_name,
                    last_name: result[0].last_name
                }
                res.status(200).send(req.session.user)
            }
        }
    },

    logoutUser: async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

getUser: async (req, res) => {
    
}
}