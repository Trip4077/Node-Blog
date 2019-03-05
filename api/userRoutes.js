const express = require('express');
const router = express.Router();
const db = require ('../data/helpers/userDb');

router.post('/', async (req,res) => {
    try {
        const user = req.body;
        
        if(user.name) {
            //Add uniqueness check here
            const users = await db.get();
            const uniqueNameCheck = users.filter(item => item.name === user.name);

            if(uniqueNameCheck.length === 0) {
                const userCreated = await db.insert(user);
            
                res.status(201).json(userCreated)
            } else {
                res.status(401).json({ error: 'Username in use'})
            }

        } else {
            res.status(400).json({ errorMessage: "Please provide a name for the user." })
        }
    } catch(err) {
        res.status(500).json({ error: "There was an error while saving the user to the database" });
    }
})
router.get('/', async (req, res) => {
    try {
        const users = await db.get();
        res.status(200).json(users);
    } catch(err) {
        res.status(500).json({ error: "The users information could not be retrieved." });
    }
}) 


module.exports = router;
