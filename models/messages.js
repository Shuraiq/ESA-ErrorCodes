const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    from: {
        type: Number,
        required: true,
    },
    to: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});


mongoose.model("Message", MessageSchema);
