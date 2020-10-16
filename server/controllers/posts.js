const db = require('../config/database');
const fs = require('fs');


exports.createPosts = (req, res, next) => {
    
    const title = req.body.title;
    const text = req.body.text;
    const imgageUrl = req.body.imgageUrl;

    console.log("titre",title + " texte",text)

    db.query("INSERT INTO posts (title, text, imageUrl, date_posted) VALUES (?, ?, ?, NOW())",
    [title, text, imgageUrl], (err, result) => {
        if(err){
            console.log(err);
        }

        console.log(result);
    });
};

exports.likes = (req, res, next) => {

    const id = req.params.idpost;

    db.query("UPDATE posts SET likes = likes + 1 WHERE idpost = ?", id, (err, result) => {
        if(err){
            console.log(err);
        }

        console.log(result);
    });
}

exports.getAllPosts = (req, res, next) => {

    db.query("SELECT * FROM posts", 
    (err, result) => {
        if(err){
            console.log(err);
        }

        res.send(result);
    });
};

exports.getOnePost = (req, res, next) => {

    const id = req.params.idpost

    db.query("SELECT * FROM posts WHERE idpost = ?", id,
    (err, result) => {
        if(err){
            console.log(err);
        }

        res.send(result);
    });
};


































// exports.getAllSauce = (req, res, next) => {
//     Sauce.find()
//         .then(sauces => res.status(200).json(sauces))
//         .catch(error => res.status(400).json({ error }));
// };

// exports.getOneSauce = (req, res, next) => {
//     Sauce.findOne({ _id: req.params.id })
//         .then(sauce => res.status(200).json(sauce))
//         .catch(error => res.status(404).json({ error }));
// };

// exports.likeSauce = (req, res, next) => {
//     const user = req.body.userId;
//     const like = req.body.like;

//     Sauce.findOne({ _id: req.params.id })
//         .then(sauce => {
//             if (sauce.usersLiked.includes(user)) {
//                 Sauce.updateOne({ _id: req.params.id }, { $pull: { usersLiked: user }, $inc: { likes: -1 } })
//                     .catch(error => res.status(400).json({ error }));
//             }
//             if (sauce.usersDisliked.includes(user)) {
//                 Sauce.updateOne({ _id: req.params.id }, { $pull: { usersDisliked: user }, $inc: { dislikes: -1 } })
//                     .catch(error => res.status(400).json({ error }));
//             }
//         }).then(() => {
//             if (like === 1) {
//                 Sauce.updateOne({ _id: req.params.id }, { $push: { usersLiked: user }, $inc: { likes: 1 } })
//                     .then(() => res.status(200).json({ message: user + " j'aime " }))
//                     .catch(error => res.status(400).json({ error }));
//             } else if (like === -1) {
//                 Sauce.updateOne({ _id: req.params.id }, { $push: { usersDisliked: user }, $inc: { dislikes: 1 } })
//                     .then(() => res.status(200).json({ message: user + " je n'aime pas " }))
//                     .catch(error => res.status(400).json({ error }));
//             }

//             if (like === 0) {
//                 res.status(200).json({ message: user + " je suis neutre " })
//             }
//         }).catch(error => res.status(404).json({ error }));
// };

// exports.createSauce = (req, res, next) => {
//     const sauceObject = JSON.parse(req.body.sauce);
//     delete sauceObject._id;
//     const sauce = new Sauce({
//         ...sauceObject,
//         imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//     });
//     sauce.save()
//         .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
//         .catch(error => res.status(400).json({ error }));
// };

// exports.modifySauce = (req, res, next) => {
//     const sauceObject = req.file ? {
//         ...JSON.parse(req.body.sauce),
//         imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//     } : { ...req.body };
//     Sauce.findOne({ _id: req.params.id })
//         .then(sauce => {
//             const filename = sauce.imageUrl.split('/images/')[1];
//             fs.unlink(`images/${filename}`, () => {
//                 Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
//                     .then(() => res.status(200).json({ message: 'Objet modifié !' }))
//                     .catch(error => res.status(400).json({ error }));
//             });
//         }).catch(error => res.status(404).json({ error }));
// };

// exports.deleteSauce = (req, res, next) => {
//     Sauce.findOne({ _id: req.params.id })
//         .then(sauce => {
//             const filename = sauce.imageUrl.split('/images/')[1];
//             fs.unlink(`images/${filename}`, () => {
//                 Sauce.deleteOne({ _id: req.params.id })
//                     .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
//                     .catch(error => res.status(404).json({ error }));
//             });
//         })
//         .catch(error => res.status(500).json({ error }));
// };