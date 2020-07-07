module.exports ={
    editProfile: async (req, res) => {
        const {newProfile} = req.body;
        const {id} = req.params;
        // console.log(newProfile, id)
        const db = req.app.get('db');

        db.edit_profile([id, newProfile])

            return res.sendStatus(200)
        }
     
    }
