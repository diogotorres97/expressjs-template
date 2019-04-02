'use strict';

let router = require("express").Router();

/*+++++++++++++++++++++++++++++++++++++++++++++
 Routes
 ++++++++++++++++++++++++++++++++++++++++++++++*/

const auth = require("./auth");
const todos = require("./todos");
const todoItems = require("./todoItems");
const passport = require('passport');


router.use("/", auth);
router.use("/api/", passport.authenticate('jwt', {session: false}));
router.use("/api/", todos);
router.use("/api/", todoItems);
router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
}));


module.exports = router;
