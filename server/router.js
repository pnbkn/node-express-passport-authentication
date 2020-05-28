const express = require("express");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const {models} = require("./db");
const {User} = models;

router.get('/users', async (req, res, next)=>{
    try{ 
       //If user session is admin, show everything
        // User.findAll({
        //     attributes: ["username", "email"]
        //   })
        User.findAll()
        .then(users => res.send(users))
    }
    catch (e) {
        res.sendStatus(500);
        next(e);
      }

});


module.exports = router;