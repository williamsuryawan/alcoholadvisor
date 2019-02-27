const express = require("express");
const router = express.Router();
const model = require("../models");

router.get("/", (req, res) => {
  model.User.findAll()
    .then(users => {
      // console.log(users);
      res.send(users)
      // res.render("user", { data: users });
    })
    .catch(err => {
      console.log(err);
    });
});

// Pakai get dulu nanti dirubah ke post
// router.post("/reg",(req,res)=> {
//     let newUser = req.body
//     model.User.create({
//       firstName: newUser['First Name'],
//       lastName: newUser['Last Name'],
//       birthday: newUser['Birthday'],
//       email: newUser['Email'],
//       password: newUser['Password']
//     })

//     .then(data => {
//       res.send(data)
//       // res.redirect("/userHome");
//     })
//     .catch(err => {
//       res.send("Bad Request");
//     });
// })



module.exports = router