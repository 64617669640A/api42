const express = require('express')
const app = express()
const router = express.Router()

const User = require('../models/User')

/*
  create
*/
router.route('/create').post((req, res) => {
  const user = new User(req.body)
  user.save()
    .then(user => 
      {res.status(200).json({'user': 'user created successfully'})
    })
    .catch(err => 
      {res.status(400).send("unable to save user into database")
    })
})

/*
  show
*/
router.route('/show').get((req, res) => {
  User.find((err, users) => {
    if(err) {
      console.log(err)    
    }
    else {
      res.json(users);
    }
  })
})

/*
  update
*/
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(!user)
      return next(new Error("could no load user"))
    else {
      user.name = req.body.name;
      user.age = req.body.age;
      user.gender = req.body.gender;

      user.save().then(user => {
        res.json('update sucessfully')
      })
      .catch(err => {
        res.status(400).send('unable to update the database')
      })
    }  
  })
})

/*
  delete
*/
router.route('/delete/:id').get((req, res) => {
  User.findByIdAndRemove({_id: req.params.id}, (err, user) => {
      if(err) res.json(err);
      else res.json('Successfully removed');
    });
});

/*
  search
*/
router.route('/search/:id').get((req, res) => {
  User.findOne({_id: req.params.id}, (err, user) => {
    if(err) res.json(err);
    else res.json('search find');
  })
})


module.exports = router
