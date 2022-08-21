const express = require('express');
const Validator = require('fastest-validator');
const router = express.Router();
const v = new Validator();
const {Activity} = require('../models');

router.post('/insertActivities', async (req, res, next) => {
    const schema = {
        "activityType" : "string",
        "institution" : "string",
        "when" : "string",
        "objective" : "string",
        "remarks" : "string",
    };

    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json(validate);
    }

    const activity = await Activity.create(req.body); 
    res.json({
        status : 200,
        message: "Success",
        data: activity,
    });
});

router.put('/update/:id', async (req, res,next) => {
    const id =  req.params.id;
    let activity = await Activity.findByPk(id);
    if (!activity) {
        return res.status(404).json({
            status: 400,
            message: "not found",
        });
    }

    const schema = {
        "activityType" : "string",
        "institution" : "string",
        "when" : "string",
        "objective" : "string",
        "remarks" : "string",
    };
    const validate = v.validate(req.body,schema);
    if (validate.length) {
        return res.status(400).json(validate);
    }

    activity = await activity.update(req.body);
    res.json({
        status:200,
        message: "Success update",
        data : activity, 
    });
});

router.get('/getAllActivity', async (req, res,nex) => {
    const activity = await Activity.findAll();
    return res.json({
        status : 200,
        message: "Success get data",
        activities : activity,
    });
});

router.get('/getActivity/:id', async (req, res,nex) => {
    const id =  req.params.id;
    let activity = await Activity.findByPk(id);
    if (!activity) {
        return res.status(404).json({
            status: 400,
            message: "not found",
        });
    }
    
    return res.json({
        status : 200,
        message: "Success get data",
        activities : activity,
    });
});

router.delete('/delete/:id',async (req, res,next) => {
    const id =  req.params.id;
    let activity = await Activity.findByPk(id);
    if (!activity) {
        return res.status(404).json({
            status: 400,
            message: "not found",
        });
    }
   
    await activity.destroy();
    res.json({
            status : 200,
            message: "Success delete data",
            activities : activity,
    });
});

module.exports = router;