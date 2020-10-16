const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const postsCtrl = require('../controllers/posts');

router.post('/posts',auth, postsCtrl.createPosts);
router.post('/like/:idpost',auth, postsCtrl.likes);

router.get('/getposts',auth, postsCtrl.getAllPosts);
router.get('/getpost/:idpost',auth, postsCtrl.getOnePost);


// const sauceCtrl = require('../controllers/sauce');
// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

// router.get('/', auth, sauceCtrl.getAllSauce);
// router.post('/', auth, multer, sauceCtrl.createSauce);
// router.post('/:id/like', auth, sauceCtrl.likeSauce);
// router.get('/:id', auth, sauceCtrl.getOneSauce);
// router.put('/:id', auth, multer, sauceCtrl.modifySauce);
// router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;