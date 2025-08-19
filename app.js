const express=require('express');
const app=express();
const path=require('path');
const User = require('./usermodel'); // Import the User model
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/',async(req,res)=>{
   const {name,email,url}=req.body;
const user= await User.create({
    name,
    email,
    url
   })
   console.log("succesfully created",user);
   res.redirect('/');
})
app.get('/users',async(req,res)=>{
    const users=await User.find();
    res.render('user_display',{users});
});

app.get('/users/:id/edit', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.render('edit', { user });
});

app.post('/users/:id/edit', async (req, res) => {
    const { name, email, url } = req.body;
    await User.findByIdAndUpdate(req.params.id, { name, email, url });
    res.redirect('/users');
});

app.get('/users/:id/delete',async(req,res)=>{
    const deleted=await User.findByIdAndDelete(req.params.id);
    res.redirect('/users');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
