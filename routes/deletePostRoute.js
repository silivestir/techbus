const express = require("express")
const { deletePost } = require('../controllers/deletePostController');
const router = express.Router();

router.post('/posts/', (req, res, next) => { console.log(`DELETED`), next() }, deletePost);
module.exports = router;