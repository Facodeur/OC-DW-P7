const db = require('../config/database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.signup = (req, res, next) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if(err){
        console.log(err);
      }

      db.query(
      'INSERT INTO users (username, email, password) VALUES (?,?,?)', 
      [username, email, hash], 
      (err, result) => {
      console.log(err);
    })
  })
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    'SELECT * FROM users WHERE email = ?',
    [email, password],
    (err, dbResult) => {
      if(err) {
        console.log(err);
      }

      if(dbResult.length > 0) {
        bcrypt.compare(password, dbResult[0].password, (error, response) => {
          if(response) {
            console.log(dbResult)
            res.status(200).json({
                            userId: dbResult[0].id,
                            token: jwt.sign(
                                { userId: dbResult[0].id },
                                'RANDOM_TOKEN_SECRET',
                                { expiresIn: '24h' }
                            )
                          });
          } else {
            res.send({ message: "Wrong email/password combination"})
          }
        })
      } else {
        res.status(404).json({ message: "User not exist !"})
      }
    })
}
// exports.login = (req, res, next) => {
//     User.findOne({ email: req.body.email })
//       .then(user => {
//         if (!user) {
//           return res.status(401).json({ error: 'Utilisateur non trouvé !' });
//         }
//         bcrypt.compare(req.body.password, user.password)
//           .then(valid => {
//             if (!valid) {
//               return res.status(401).json({ error: 'Mot de passe incorrect !' });
//             }
//             res.status(200).json({
//               userId: user._id,
//               token: jwt.sign(
//                   { userId: user._id },
//                   'RANDOM_TOKEN_SECRET',
//                   { expiresIn: '24h' }
//               )
//             });
//           })
//           .catch(error => res.status(500).json({ error }));
//       })
//       .catch(error => res.status(500).json({ error }));
// };

// exports.signup = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10)
//     .then( hash => {
//         const user = new User({
//             email: req.body.email,
//             password: hash
//         });
//         user.save()
//         .then( () => res.status(201).json({ message: 'Utilisateur créé !' }))
//         .catch( error => res.status(500).json({ error }));
//     })
//     .catch( error => res.status(500).json({ error }));
// };
