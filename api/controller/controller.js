var userDB = require('../models/model');

exports.addRoom = (req,res) => {{
    username =  req.body.username_;
    newroom = req.body.newroom;
    userDB.findOneAndUpdate({"username": username}, {$push: {"rooms": newroom}}).then(res.status(200).send({message: `dones`}));
}}

exports.addCar = (req,res) => {{
    username =  req.body.username_;
    carName = req.body.carName;
    climSetting = req.body.climSetting;
    seatSetting = req.body.seatSetting;
    lightColor = req.body.lightColor;
    workAddress = req.body.workAddress;
    userDB.findOneAndUpdate({"username": username}, {$push: {"cars": {
        "carName": carName,
        "climSetting": climSetting,
        "seatSetting": seatSetting,
        "lightColor": lightColor,
        "workAddress": workAddress
    }}}).then(res.status(200).send({message: `dones`}));
}}

