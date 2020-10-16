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
      'INSERT INTO users (username, email, password, create_at) VALUES (?,?,?, NOW())', 
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
                            userName: dbResult[0].username, 
                            token: jwt.sign(
                                { userId: dbResult[0].id },
                                'RANDOM_TOKEN_SECRET',
                                { expiresIn: '24h' }
                            )
                          });
          } else {
            res.status(401).json({ message: "Wrong email/password combination"})
          }
        })
      } else {
        res.status(404).json({ message: "User not exist !"})
      }
    })
}
