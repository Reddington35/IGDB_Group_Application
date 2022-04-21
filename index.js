var express = require('express');
var router = express.Router();
var Comment = require('../models/comments');
var abzu_Comments = require('../models/abzu_Comments');
var Anarcute_Comments = require('../models/Anarcute_Comments');
var Antihero_Comments = require('../models/Antihero_Comments');
var Aporia_Comments = require('../models/Aporia_Comments');
var AC_Origins_Comments = require('../models/AC_Origins_Comments');
var Ashes_Comments = require('../models/Ashes_Comments');
var BattlefieldOne_Comments = require('../models/BattlefieldOne_Comments');
var BatmanTheEnemyWithin_Comments = require('../models/BatmanTheEnemyWithin_Comments');
var Battlerite_Comments = require('../models/Battlerite_Comments');
var BitBlasterXL_Comments = require('../models/BitBlasterXL_Comments');
var BlackDesertOnline_Comments = require('../models/BlackDesertOnline_Comments');
var BulletStorm_Comments = require('../models/BulletStorm_Comments');
var CallOfDutyADVWAR_Comments = require('../models/CallOfDutyADVWAR_Comments');
var CallOfDutyBlack3_Comments = require('../models/CallOfDutyBlack3_Comments');
var CallOfDutyGhost_Comments = require('../models/CallOfDutyGhost_Comments');
var Divinity_2_Comments = require('../models/Divinity_2_Comments');
var Doom_Comments = require('../models/Doom_Comments');
var Divinity_Comments = require('../models/Divinity_Comments');
var DragonsDogma_Comments = require('../models/DragonsDogma_Comments');
var Dishonoured2_Comments = require('../models/Dishonoured2_Comments');
var DeusEx_Comments = require('../models/DeusEx_Comments');
var EvilWithin_Comments = require('../models/EvilWithin_Comments');
var EvilWithin2_Comments = require('../models/EvilWithin2_Comments');
var Evolve_Comments = require('../models/Evolve_Comments');
var FF15_Comments = require('../models/FF15_Comments');
var Fallout4_Comments = require('../models/Fallout4_Comments');
var FF7_Comments = require('../models/FF7_Comments');
var GTA5_Comments = require('../models/GTA5_Comments');
var GTA4_Comments = require('../models/GTA4_Comments');
var GhostReconWild_Comments = require('../models/GhostReconWild_Comments');
var HalfLife2_Comments = require('../models/HalfLife2_Comments');
var Hitman_Comments = require('../models/Hitman_Comments');
var Hunt_Comments = require('../models/Hunt_Comments');
var Injustice_Comments = require('../models/Injustice_Comments');
var Injustice2_Comments = require('../models/Injustice2_Comments');
var IcewindDale_Comments = require('../models/IcewindDale_Comments');
var JadeEmpire_Comments = require('../models/JadeEmpire_Comments');
var JustCause2_Comments = require('../models/JustCause2_Comments');
var JustCause3_Comments = require('../models/JustCause2_Comments');
var KillerInstinct_Comments = require('../models/KillerInstinct_Comments');
var KillingFloor_Comments = require('../models/KillingFloor_Comments');
var KillingFloor2_Comments = require('../models/KillingFloor2_Comments');
var LifeIsStrange_Comments = require('../models/LifeIsStrange_Comments');
var Left4Dead_Comments = require('../models/Left4Dead_Comments');
var Left4Dead2_Comments = require('../models/Left4Dead2_Comments');
var Mafia2_Comments = require('../models/Mafia2_Comments');
var MetalGear5_Comments = require('../models/MetalGear5_Comments');
var Metro_Comments = require('../models/Metro_Comments');
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var requester = new XMLHttpRequest();

//-------------------------------Get the Home Page-------------------------------------------

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//------------------------------Get the Feeds Page-------------------------------------------

router.get('/feed', function(req, res, next) {
    res.render('feed');
});

//-------------------------Comments for Abzu------------------------------------------

router.post('/add_abzu_Comments', function(req, res, next) {
    comment = new abzu_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_abzu_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    abzu_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_abzu_Comments/:id', function(req, res, next){

    var id = req.params.id;
    abzu_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    abzu_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});


//-------------------------Comments for Anarcute------------------------------------------

router.post('/add_Anarcute_Comments', function(req, res, next) {
    comment = new Anarcute_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Anarcute_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Anarcute_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Anarcute_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Anarcute_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Anarcute_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Antihero------------------------------------------

router.post('/add_Antihero_Comments', function(req, res, next) {
    comment = new Antihero_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Antihero_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Antihero_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Antihero_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Antihero_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Antihero_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Aporia------------------------------------------

router.post('/add_Aporia_Comments', function(req, res, next) {
    comment = new Aporia_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Aporia_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Aporia_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Aporia_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Aporia_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Aporia_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});


//-------------------------Comments for AC_Origins------------------------------------------

router.post('/add_AC_Origins_Comment', function(req, res, next) {
    comment = new AC_Origins_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_AC_Origins_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    AC_Origins_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_AC_Origins_Comment/:id', function(req, res, next){

    var id = req.params.id;
    AC_Origins_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    AC_Origins_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Ashes of The Singularity------------------------------------------

router.post('/add_Ashes_Comments', function(req, res, next) {
    comment = new Ashes_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Ashes_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Ashes_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Ashes_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Ashes_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Ashes_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for BattlefieldOne------------------------------------------

router.post('/add_BattlefieldOne_Comments', function(req, res, next) {
    comment = new BattlefieldOne_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_BattlefieldOne_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    BattlefieldOne_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_BattlefieldOne_Comments/:id', function(req, res, next){

    var id = req.params.id;
    BattlefieldOne_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    BattlefieldOne_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for BatmanTheEnemyWithin------------------------------------------

router.post('/add_BatmanTheEnemyWithin_Comments', function(req, res, next) {
    comment = new BatmanTheEnemyWithin_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_BatmanTheEnemyWithin_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    BatmanTheEnemyWithin_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_BatmanTheEnemyWithin_Comments/:id', function(req, res, next){

    var id = req.params.id;
    BatmanTheEnemyWithin_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    BatmanTheEnemyWithin_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Battlerite------------------------------------------

router.post('/add_Battlerite_Comments', function(req, res, next) {
    comment = new Battlerite_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Battlerite_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Battlerite_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Battlerite_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Battlerite_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Battlerite_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for BitBlasterXL------------------------------------------

router.post('/add_BitBlasterXL_Comments', function(req, res, next) {
    comment = new BitBlasterXL_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_BitBlasterXL_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    BitBlasterXL_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_BitBlasterXL_Comments/:id', function(req, res, next){

    var id = req.params.id;
    BitBlasterXL_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    BitBlasterXL_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for BlackDesertOnline------------------------------------------

router.post('/add_BlackDesertOnline_Comments', function(req, res, next) {
    comment = new BlackDesertOnline_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_BlackDesertOnline_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    BlackDesertOnline_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_BlackDesertOnline_Comments/:id', function(req, res, next){

    var id = req.params.id;
    BlackDesertOnline_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    BlackDesertOnline_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for BulletStorm.hbs------------------------------------------

router.post('/add_BulletStorm_Comments', function(req, res, next) {
    comment = new BulletStorm_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_BulletStorm_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    BulletStorm_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_BulletStorm_Comments/:id', function(req, res, next){

    var id = req.params.id;
    BulletStorm_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    BulletStorm_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for CallOfDutyADVWAR.hbs------------------------------------------

router.post('/add_CallOfDutyADVWAR_Comments', function(req, res, next) {
    comment = new CallOfDutyADVWAR_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_CallOfDutyADVWAR_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    CallOfDutyADVWAR_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_CallOfDutyADVWAR_Comments/:id', function(req, res, next){

    var id = req.params.id;
    CallOfDutyADVWAR_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    CallOfDutyADVWAR_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for CallOfDutyBlack3.hbs------------------------------------------

router.post('/add_CallOfDutyBlack3_Comments', function(req, res, next) {
    comment = new CallOfDutyBlack3_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_CallOfDutyBlack3_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    CallOfDutyBlack3_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_CallOfDutyBlack3_Comments/:id', function(req, res, next){

    var id = req.params.id;
    CallOfDutyBlack3_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    CallOfDutyBlack3_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for CallOfDutyGhost.hbs------------------------------------------

router.post('/add_CallOfDutyGhost_Comments', function(req, res, next) {
    comment = new CallOfDutyGhost_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_CallOfDutyGhost_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    CallOfDutyGhost_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_CallOfDutyGhost_Comments/:id', function(req, res, next){

    var id = req.params.id;
  CallOfDutyGhost_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    CallOfDutyGhost_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Divinity_2------------------------------------------

router.post('/add_Divinity_2_Comments', function(req, res, next) {
    comment = new Divinity_2_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Divinity_2_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Divinity_2_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Divinity_2_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Divinity_2_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Divinity_2_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Doom------------------------------------------

router.post('/add_Doom_Comments', function(req, res, next) {
    comment = new Doom_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Doom_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Doom_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Doom_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Doom_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Doom_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Divinity------------------------------------------

router.post('/add_Divinity_Comments', function(req, res, next) {
    comment = new Divinity_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Divinity_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Divinity_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Divinity_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Divinity_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Divinity_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for DragonsDogma------------------------------------------

router.post('/add_DragonsDogma_Comments', function(req, res, next) {
    comment = new Doom_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_DragonsDogma_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    DragonsDogma_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_DragonsDogma_Comments/:id', function(req, res, next){

    var id = req.params.id;
    DragonsDogma_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    DragonsDogma_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Dishonoured2------------------------------------------

router.post('/add_Dishonoured2_Comments', function(req, res, next) {
    comment = new Dishonoured2_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Dishonoured2_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Dishonoured2_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Dishonoured2_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Dishonoured2_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Dishonoured2_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for DeusEx------------------------------------------

router.post('/add_DeusEx_Comments', function(req, res, next) {
    comment = new DeusEx_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_DeusEx_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    DeusEx_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_DeusEx_Comments/:id', function(req, res, next){

    var id = req.params.id;
    DeusEx_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    DeusEx_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for EvilWithin.hbs------------------------------------------

router.post('/add_EvilWithin_Comments', function(req, res, next) {
    comment = new EvilWithin_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_EvilWithin_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    EvilWithin_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_EvilWithin_Comments/:id', function(req, res, next){

    var id = req.params.id;
    EvilWithin_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    EvilWithin_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for EvilWithin2.hbs------------------------------------------

router.post('/add_EvilWithin2_Comments', function(req, res, next) {
    comment = new EvilWithin2_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_EvilWithin2_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    EvilWithin2_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_EvilWithin2_Comments/:id', function(req, res, next){

    var id = req.params.id;
    EvilWithin2_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  EvilWithin2_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Evolve.hbs------------------------------------------

router.post('/add_Evolve_Comments', function(req, res, next) {
    comment = new Evolve_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Evolve_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Evolve_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Evolve_Comments/:id', function(req, res, next){

    var id = req.params.id;
  Evolve_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  Evolve_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for FF15.hbs------------------------------------------

router.post('/add_FF15_Comments', function(req, res, next) {
    comment = new FF15_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_FF15_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    FF15_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_FF15_Comments/:id', function(req, res, next){

    var id = req.params.id;
  FF15_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  FF15_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Fallout4.hbs------------------------------------------

router.post('/add_Fallout4_Comments', function(req, res, next) {
    comment = new Fallout4_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Fallout4_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Fallout4_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Fallout4_Comments/:id', function(req, res, next){

    var id = req.params.id;
  Fallout4_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  Fallout4_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for FF7.hbs------------------------------------------

router.post('/add_FF7_Comments', function(req, res, next) {
    comment = new FF7_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_FF7_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    FF7_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_FF7_Comments/:id', function(req, res, next){

    var id = req.params.id;
  FF7_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  FF7_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for GTA5.hbs------------------------------------------

router.post('/add_GTA5_Comments', function(req, res, next) {
    comment = new GTA5_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_GTA5_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    GTA5_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_GTA5_Comments/:id', function(req, res, next){

    var id = req.params.id;
  GTA5_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  GTA5_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for GTA4.hbs------------------------------------------

router.post('/add_GTA4_Comments', function(req, res, next) {
    comment = new GTA4_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_GTA4_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    GTA4_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_GTA4_Comments/:id', function(req, res, next){

    var id = req.params.id;
 GTA4_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  GTA4_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for GhostReconWild.hbs------------------------------------------

router.post('/add_GhostReconWild_Comments', function(req, res, next) {
    comment = new GhostReconWild_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_GhostReconWild_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    GhostReconWild_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_GhostReconWild_Comments/:id', function(req, res, next){

    var id = req.params.id;
 GhostReconWild_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  GhostReconWild_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for HalfLife2.hbs------------------------------------------

router.post('/add_HalfLife2_Comments', function(req, res, next) {
    comment = new HalfLife2_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_HalfLife2_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    HalfLife2_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_HalfLife2_Comments/:id', function(req, res, next){

    var id = req.params.id;
 HalfLife2_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  HalfLife2_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Hitman.hbs------------------------------------------

router.post('/add_Hitman_Comments', function(req, res, next) {
    comment = new Hitman_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Hitman_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Hitman_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Hitman_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Hitman_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  Hitman_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Hunt.hbs------------------------------------------

router.post('/add_Hunt_Comments', function(req, res, next) {
    comment = new Hunt_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Hunt_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Hunt_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Hunt_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Hunt_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  Hunt_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Injustice.hbs------------------------------------------

router.post('/add_Injustice_Comments', function(req, res, next) {
    comment = new Injustice_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Injustice_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Injustice_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Injustice_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Injustice_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  Injustice_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Injustice2.hbs------------------------------------------

router.post('/add_Injustice2_Comments', function(req, res, next) {
    comment = new Injustice2_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Injustice2_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Injustice2_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Injustice2_Comments/:id', function(req, res, next){

    var id = req.params.id;
    Injustice2_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  Injustice2_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for IcewindDale.hbs------------------------------------------

router.post('/add_IcewindDale_Comments', function(req, res, next) {
    comment = new IcewindDale_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_IcewindDale_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    IcewindDale_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_IcewindDale_Comments/:id', function(req, res, next){

    var id = req.params.id;
    IcewindDale_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  IcewindDale_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for JadeEmpire.hbs------------------------------------------

router.post('/add_JadeEmpire_Comments', function(req, res, next) {
    comment = new JadeEmpire_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_JadeEmpire_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    JadeEmpire_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_JadeEmpire_Comments/:id', function(req, res, next){

    var id = req.params.id;
    JadeEmpire_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  JadeEmpire_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for JustCause2.hbs------------------------------------------

router.post('/add_JustCause2_Comments', function(req, res, next) {
    comment = new JustCause2_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_JustCause2_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    JustCause2_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_JustCause2_Comments/:id', function(req, res, next){

    var id = req.params.id;
  JustCause2_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  JustCause2_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for JustCause3.hbs------------------------------------------

router.post('/add_JustCause3_Comments', function(req, res, next) {
    comment = new JustCause3_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_JustCause3_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    JustCause3_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_JustCause3_Comments/:id', function(req, res, next){

    var id = req.params.id;
  JustCause3_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  JustCause3_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for KillerInstinct.hbs------------------------------------------

router.post('/add_KillerInstinct_Comments', function(req, res, next) {
    comment = new KillerInstinct_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_KillerInstinct_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    KillerInstinct_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_KillerInstinct_Comments/:id', function(req, res, next){

    var id = req.params.id;
  KillerInstinct_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  KillerInstinct_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for KillingFloor.hbs------------------------------------------

router.post('/add_KillingFloor_Comments', function(req, res, next) {
    comment = new KillingFloor_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_KillingFloor_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    KillingFloor_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_KillingFloor_Comments/:id', function(req, res, next){

    var id = req.params.id;
  KillingFloor_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  KillingFloor_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for KillingFloor2.hbs------------------------------------------

router.post('/add_KillingFloor2_Comments', function(req, res, next) {
    comment = new KillingFloor2_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_KillingFloor2_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    KillingFloor2_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_KillingFloor2_Comments/:id', function(req, res, next){

    var id = req.params.id;
  KillingFloor2_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  KillingFloor2_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for LifeIsStrange.hbs------------------------------------------

router.post('/add_LifeIsStrange_Comments', function(req, res, next) {
    comment = new LifeIsStrange_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_LifeIsStrange_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    LifeIsStrange_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_LifeIsStrange_Comments/:id', function(req, res, next){

    var id = req.params.id;
  LifeIsStrange_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  LifeIsStrange_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Left4Dead.hbs------------------------------------------

router.post('/add_Left4Dead_Comments', function(req, res, next) {
    comment = new Left4Dead_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Left4Dead_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Left4Dead_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Left4Dead_Comments/:id', function(req, res, next){

    var id = req.params.id;
  Left4Dead_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  Left4Dead_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Left4Dead2.hbs------------------------------------------

router.post('/add_Left4Dead2_Comments', function(req, res, next) {
    comment = new Left4Dead2_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Left4Dead2_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Left4Dead2_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Left4Dead2_Comments/:id', function(req, res, next){

    var id = req.params.id;
  Left4Dead2_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  Left4Dead2_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Mafia2.hbs------------------------------------------

router.post('/add_Mafia2_Comments', function(req, res, next) {
    comment = new Mafia2_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Mafia2_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Mafia2_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Mafia2_Comments/:id', function(req, res, next){

    var id = req.params.id;
  Mafia2_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  Mafia2_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for MetalGear5.hbs------------------------------------------

router.post('/add_MetalGear5_Comments', function(req, res, next) {
    comment = new MetalGear5_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_MetalGear5_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    MetalGear5_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_MetalGear5_Comments/:id', function(req, res, next){

    var id = req.params.id;
  MetalGear5_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  MetalGear5_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

//-------------------------Comments for Metro.hbs------------------------------------------

router.post('/add_Metro_Comments', function(req, res, next) {
    comment = new Metro_Comments(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

router.get('/get_Metro_Comments', function(req, res, next) {

    //Pass in the object query and return the response through obj.json()
    Metro_Comments.find({}, function(err, comments){
        if(err)
            res.send(err);

        res.json(comments);
    })

});

router.delete('/remove_Metro_Comments/:id', function(req, res, next){

    var id = req.params.id;
  Metro_Comments.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
  Metro_Comments.update({_id:id}, req.body.likes, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});





//-------------------------Adding comments to the database----------------------------------

//router.post('/add_AC_Origins_Comment', function(req, res, next) {
router.post('/addComment', function(req, res, next) {
    // Extract the request body which contains the comments
    comment = new Comment(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});



//---------------------Retrieving every single comment from the database---------------------

// router.get('/getComments', function(req, res, next) {
//
//     //Pass in the object query and return the response through obj.json()
//     Comment.find({}, function(err, comments){
//         if(err)
//             res.send(err);
//
//         res.json(comments);
//     })
//
// });

//------------------Updating a comment that is already in the database-----------------------

router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Comment.update({_id:id}, req.body, function(err) {
        if(err)
            res.send(err);

        res.json({status : "The comment has been updated succesfully"});
    });
});

//-------------------------Removing a comment from the database-----------------------------

router.delete('/removeComment/:id', function(req, res, next){

    var id = req.params.id;
    Comment.remove({_id:id}, function(err){
        if(err)
            res.send(err);

        res.json({status : "The comment has been removed succesfully"});
    });
});

//-------------------------------------------------------------------------------------------

module.exports = router;
