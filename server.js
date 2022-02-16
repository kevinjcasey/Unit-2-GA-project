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
// const Products = require('./models/products');
// const Users = require('./models/usersDB')
// const userSchema = require('./models/users')

// ========= User Auth stuff ========= //

const userController = require('./controllers/users_controller.js')
// require('express-session').config()
const session = require('express-session')
const sessionsController = require('./controllers/sessions_controller.js')

// ======= ^^ User Auth stuff ^^ ======= //

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

// ========= User Auth stuff ========= //

app.use('/users', userController)

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
)

app.use('/sessions', sessionsController)

// ======= ^^ User Auth stuff ^^ ======= //

//====================
//Routes
//====================

// -------- Create new user  ------- //

app.get('/users/new', (req, res) => {
    res.render('users/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// ---------- Login route ---------- //

app.get('/sessions/new', (req, res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// app.post('/', (req, res) => {
//     userSchema.create(req.body, (err, createdUser) => {
//         console.log(createdUser)
//         res.redirect('/')
//     })
// })

// -------- Home page ------- //

app.get('/', (req, res) => {
    // userSchema.find({}, (err, foundUsers) => {
        res.render('home.ejs', {
            // users: foundUsers,
            tabTitle: 'Home',
            currentUser: req.session.currentUser
        })    
    })   
// })

// --------- Categories page -------- // 

app.get('/categories', (req, res) => {
    res.render('categories.ejs', {
        tabTitle: 'Categories',
        currentUser: req.session.currentUser
    })
})

// -------- Category routes -------- //

app.get('/essentials', (req, res) => {
    productSchema.find({}, (err, foundEssentials) => {
        res.render('essentials.ejs', {
            products: foundEssentials,
            tabTitle: 'Essentials',
            currentUser: req.session.currentUser
        })
    })
})

app.get('/glassware', (req, res) => {
    productSchema.find({}, (err, foundGlassware) => {
        res.render('glassware.ejs', {
            products: foundGlassware,
            tabTitle: 'Glassware',
            currentUser: req.session.currentUser
        })
    })
})

app.get('/accessories', (req, res) => {
    productSchema.find({}, (err, foundAccessories) => {
        res.render('accessories.ejs', {
            products: foundAccessories,
            tabTitle: 'Accessories',
            currentUser: req.session.currentUser
        })
    })
})

app.get('/ice', (req, res) => {
    productSchema.find({}, (err, foundIce) => {
        res.render('ice.ejs', {
            products: foundIce,
            tabTitle: 'Ice',
            currentUser: req.session.currentUser
        })
    })
})

// -------- Product Info / Show ------- //

app.get('/:id', (req, res) => {
    productSchema.findById(req.params.id, (err, Products) => {
        res.render('show.ejs', {
            products: Products,
            tabTitle: Products.name,
            currentUser: req.session.currentUser
        })
    })
})

// -------- Cart / Add-to Cart ------- //

app.get('/cart', (req, res) => {
     res.send('cart page is linked')
})
//====================
//Listener
//====================
app.listen(PORT, () => console.log( 'Listening on port:', PORT));