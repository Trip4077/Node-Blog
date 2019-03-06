const express = require('express');
const router = express.Router();
const db = require ('../data/helpers/postDb');

//Create new post
router.post('/', async (req, res) => {
    try {
        const post = req.body;
        console.log(post)
        if(post.text && post.user_id) {
            const posted = await db.insert(post);
            res.status(201).json(posted)
        } else {
            res.status(400).json({ errorMessage: "Please provide text for the post." })
        }
    } catch(err) {
        res.status(500).json({ error: 'Post could not be added'})
    }
});

//Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await db.get();
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({ error: "The posts information could not be retrieved." });
    }
});

//Get post by id
router.get('/:id', async (req, res) => {
    try {
        const post = await db.getById(req.params.id);

        if(post) {
            res.status(200).json(post)
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    } catch(err) {
        res.status(500).json({ error: "The user information could not be retrieved." });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;

        const updated = await db.update(id, update);

        if(updated) {
            res.status(201).json(updated);
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    } catch(err) {
        res.status(500).json({ error: "The post information could not be updated." });
    }
})

module.exports = router;