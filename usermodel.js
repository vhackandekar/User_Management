const { name } = require('ejs');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');
const userschema=mongoose.Schema({
    name:String,
    email:String,
    url:String
})
module.exports=mongoose.model('User',userschema);