module.exports ={

    getPosts: async (req, res) => {
        
        const db = req.app.get('db')


        db.get_posts()
        .then(posts => res.status(202).send(posts))
        .catch(err => console.log(err))
    }
}