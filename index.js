require('./models/messages');
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const {inbound} = require('./routes/inbound')
const outbound = require('./routes/outbound')

require('dotenv').config();

app.use(express.json());


const port = 8080;

app.use('/API',inbound)
app.use('/API',outbound)

app.get('/', (req, res) => {
    res.send("ESA Assignment-4");
});

app.all('*', async  (req,res)=> {
    res.status(405).json({
        "message" : "Method not allowed"
    })
})


mongoose.connect(process.env.MONGO_URL,{
    useCreateIndex: true,
    useUnifiedTopology: true, 
    useNewUrlParser: true 
})


mongoose.connection.on('connected',() => {
   console.log("connected to database")
})


mongoose.connection.on('error',() => {
   console.log("database connection failed");
})



app.listen(process.env.PORT || port,(req,res) => {
    console.log("listening on port 8080")
})