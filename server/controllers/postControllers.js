module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get("db");

    db.get_posts()
      .then((posts) => res.status(202).send(posts))
      .catch((err) => console.log(err));
  },

  createPost: async (req, res) => {
    const {
      sport,
      location,
      details,
      people,
      going,
      posts_id,
    } = req.body;
    const db = req.app.get("db");
    db.create_post([
      sport,
      location,
      details,
      people,
      posts_id,
      going,
    ])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.log(err);

        res.status(500).send(err);
      });
  },

  getPost: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.get_post(id)
      .then((result) => {
        db.get_people(id).then(attendees =>{
          result[0].attendees = attendees
        res.status(202).send(result)})
        
      })
       
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
    },

  deletePost: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    db.delete_post(id)
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },

  editPost: async (req, res) => {
    const { sport, location, details, people } = req.body;
    const { id } = req.params;
    const db = req.app.get("db");
    // console.log([sport, location, details, people]);

    const [updatedPost] = await db.edit_post([
      id,
      sport,
      location,
      details,
      people,
    ]);

    if (updatedPost) {
      return res.sendStatus(200);
    }
    res.status(500).send("Error encountered");
  },
  addPeople: async (req, res) => {
    const { id_posts, id, going } = req.body;
    const { postId } = req.params;
    const db = req.app.get("db");
    // console.log([id, people_coming]);
    try {
      console.log(postId, id_posts, id, going);
      
      const [updatedPost] = await db.add_people([postId, id_posts, id, going]);
    console.log(updatedPost)
    if (updatedPost) {
      return res.sendStatus(200)
    }
    
      
    } catch (error) {
      console.log(error)
      res.status(500).send("Error encountered");
    }
    
    
  },

  deletePeople: async (req, res) => {
      const { id } = req.params;
      const db = req.app.get("db");
  
      const [updatedPost] = await db.add_people([id]).then(()=>{
        if (updatedPost) {
          return res.sendStatus(200)
      }})
      .catch  
      
      res.status(500).send("Error encountered");
  
  }}