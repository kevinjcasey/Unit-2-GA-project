const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

users.get('/users/new', (req, res) => {
  res.render('users/new.ejs', {
    currentUser: req.session.currentUser,
  })
  console.log(currentUser);
})

// ---------- Edit User Info ------------ //

users.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
    res.redirect('/profile')
  })
  console.log('Please work');
})

// ------------ Delete Account ---------- //

users.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect('/')
  })
})

users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    console.log('user is created', createdUser)
    res.redirect('/sessions/new')
    // How to direct to new session?
  })
})

module.exports = users