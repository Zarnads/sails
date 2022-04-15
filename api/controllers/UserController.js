/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const Sails = require("sails/lib/app/Sails");
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");
 const cookieParser = require("cookie-parser");
 
module.exports = {
  
    signin: async function (req, res) {
        try {
       
            const { email, password } = req.body;
            const useremail = await User.findOne({ email });
            const usrid = useremail.id;
            const isMatch = await bcrypt.compare(password, useremail.password);
            if (isMatch) {
                //token generate
                const token = jwt.sign({ email }, "secret_key", { expiresIn: 24 * 60 * 60 });
                //token storedin cookie
                res.cookie("unique", token, { maxAge: 24 * 60 * 60 * 1000 });
                const usr = res.locals.user;
                console.log(usr.id);
                if(useremail.admin == false){
                    res.redirect(`/product/${usrid}`);
                }
                else{
                    res.redirect(`/admin/${usrid}`);
                }
                
               
            } else { res.json({ msg: "invalid login details" }) }
        }
        catch (err) { res.status(400).json({ msg: "err at auth" }) }
    },
    signup: async function (req, res) {
        try {        
            const { password } = req.body;
            bcrypt.hash(password, 10, async (err, hash) => {
                if (err) {
                    res.json({ msg: "heyy problem in hash function" })
                } else {
                    // save user
                    const data = await User.create({
                        username:req.body.username,
                        email: req.body.email,
                        password: hash,
                        admin:false,
                        
                    })
                   
                    res.redirect("/signin")
                }
            });
        }
        catch (err) { return res.status(400).json({ message: "error at catch" }) }
    },
    check:async function(req,res){
        
    }

};

