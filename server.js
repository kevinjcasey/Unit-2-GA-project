//====================
//Dependencies
//====================
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()
const productSchema = require('./models/productSchema');
const Products = require('./models/products');
const Users = require('./models/users')
const userSchema = require('./models/userSchema')

//====================
//Port
//====================
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//====================
//Database
//====================
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//====================
//Seeding data
//====================

// productSchema.create (Products, (err, data) => {
// if (err) console.log( err.message )
// console.log("added provided products data");
// })

// userSchema.create (Users, (err, data) => {
//     if (err) console.log( err.message )
//     console.log("added provided user data");
// })
//====================
//Middleware
//====================

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings

app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

//====================
//Routes
//====================

// -------- Home page ------- //

app.get('/home', (req, res) => {
    userSchema.find({}, (err, foundUsers) => {
        res.render('home.ejs', {
            users: foundUsers,
            tabTitle: 'Home'
        })    
    })   
})

// --------- Categories page -------- // 

app.get('/categories', (req, res) => {
    res.render('categories.ejs', {
        tabTitle: 'Categories'
    })
})

// -------- Glassware -------- //

app.get('/glassware', (req, res) => {
    productSchema.find({}, (err, foundGlassware) => {
        res.render('glassware.ejs', {
            products: foundGlassware,
            tabTitle: 'Glassware'
        })
    })
})

// -------- Product Info / Show ------- //

app.get('/glassware/:id', (req, res) => {
    // Why won't Products work here?
    productSchema.findById(req.params.id, (err, Products) => {
        res.render('show.ejs', {
            products: Products,
            tabTitle: 'Glassware'
        })
    })
})

app.get('/home/new', (req, res) => {
    res.render('new.ejs')
})

app.post('/home', (req, res) => {
    userSchema.create(req.body, (err, createdUser) => {
        console.log(createdUser)
        res.redirect('/home')
    })
})
//====================
//Listener
//====================
app.listen(PORT, () => console.log( 'Listening on port:', PORT));