const express = require('express');
const router = express.Router();
const mongoose  = require('mongoose');
const Message = mongoose.model('Message');

const NodeCache = require('node-cache')
const myCache = new NodeCache()


router.post('/inbound/sms',async(req,res) => {
    let  { from , to , text  } = req.body

    if (!Number.isInteger(from) || !Number.isInteger(to)){
        return res.status(400).json({
            "message": "",
            "error": "'from' and 'to' should be numbers"
        })
    }

    if(from){
        if (from.toString().length < 6 || from.toString().length > 16) {
            return res.status(400).json({
                "message": "",
                "error": "'from' is invalid"
            })
        }
    } else {
        return res.status(400).json({
            "message": "",
            "error": "'from' is missing"
        })

    }

    if (to) {
        if (to.toString().length < 6 || to.toString().length > 16) {
            return res.status(400).json({
                "message": "",
                "error": "'to' is invalid"
            })
        }
    } else {
        return res.status(400).json({
            "message": "",
            "error": "'to' is missing"
        })
    } 

    if (text) {
        if (text.length < 1 || text.length > 120) {
            return res.status(400).json({
                "message": "",
                "error": "'text' is invalid"
            })
        }
    } else {
        return res.status(400).json({
            "message": "",
            "error": "'text' is missing"
        })
    }

    if (text.includes("STOP") || text.includes("STOP\n") || text.includes("STOP\r") || text.includes("STOP\r\n")) {

        myCache.set(from, to,14400)

        return res.status(200).json({
            "message": "Success fully blocked for 4 hours",
            "error": ""
        });
    }

    const newMessage = new Message({
        from : from,
        to : to,
        text : text
    })

    try{
        await newMessage.save()
    }catch(err){
        return res.status(500).json({
            "message": "",
            "error": "unknown failure"
        })
    }

    return res.status(200).json({
        "message": "inbound sms is ok",
        "error": ""
    });
})

exports.inbound = router
exports.cache = myCache