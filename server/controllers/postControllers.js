module.exports ={

    getPosts: async (req, res) => {
        
        const db = req.app.get('db')


        db.get_posts()
        .then(posts => res.status(202).send(posts))
        .catch(err => console.log(err))
    },


    createPost: async (req, res) => {
        const { sport, location, details, people, post_id} = req.body
        const db = req.app.get('db')
        db.create_post([sport, location, details, people, post_id]).then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send(err)
        })
    },

    getPost: async (req, res) =>{
        const db = req.app.get('db')
        const {id} = req.params

        db.get_post(id)
        .then(result => res.status(202).send(result))
        .catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
    },

    deletePost: async (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        db.delete_post(id)
        .then(()=>res.sendStatus(200))
        .catch(err=>
            res.status(500).send(err))
    }
}