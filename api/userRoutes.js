const express = require('express');
const router = express.Router();
const db = require ('../data/helpers/userDb');

//Add User
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

//Get all users
router.get('/', async (req, res) => {
    try {
        const users = await db.get();
        res.status(200).json(users);
    } catch(err) {
        res.status(500).json({ error: "The users information could not be retrieved." });
    }
}) 

//Get user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await db.getById(req.params.id);

        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
    } catch(err) {
        res.status(500).json({ error: "The user information could not be retrieved." });
    }
})

//Get user by id
router.get('/:id/posts', async (req, res) => {
    try {
        const posts = await db.getUserPosts(req.params.id);

        if(posts) {
            res.status(200).json(posts);
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
    } catch(err) {
        res.status(500).json({ error: "The user post information could not be retrieved." });
    }
})

module.exports = router;
