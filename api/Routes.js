const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');


const textUpper = (req, res, next) => {
    if(req.body.name) {
      const convertedText = req.body.name.toUpperCase();
      req.body.name = convertedText;
    }

    next();
}

router.use('/users', textUpper, userRoutes);
router.use('/posts', postRoutes);

module.exports = router;