const express= require('express');
const router =express.Router();
const {Users}= require("../models");
module.exports = router;

router.get('/', async (req, res)=>{
    const listOfUsers= await Users.findAll();
    res.json(listOfUsers);
});

router.post('/',async (req, res)=>{
    const user =req.body;
    await Users.create(user);
    res.json(user);
});

router.get('/byId/:id', async(req, res)=>{
    const id= req.params.id
    const user =await Users.findByPk(id)
    res.json(user)
});
//router.post('/delete/',async (req, res)=>{
//    const user =req.body;
//    await Users.create(user);
//    res.json(user);
//});
//router.post('/active/',async (req, res)=>{
//    const user =req.body;
//    await Users.create(user);
//    res.json(user);
//});
//router.post();

