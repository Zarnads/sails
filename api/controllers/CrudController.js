/**
 * CrudController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const multer = require('multer');

let Validator = require('validatorjs');
const img = require("express-fileupload");
module.exports = {
    create: async function (req, res) {
        try {
            req.file('file').upload({
                dirname: '../../assets/images',
                maxBytes: 1073741824
            }, async function onUploadComplete(err, files) {
                if (err) {
                    sails.log.error(err);
                    return res.json({

                        data: [],
                        error: err,
                    });
                }
                if (_.isEmpty(files)) {
                    return res.json({
                        data: [],
                        error: "The file field is required.",
                    });
                }

                if (!files.length) {
                    return res.json({
                        data: [],
                        error: "No file Uploaded",
                    });
                }
                const contentType = req.file('file')._files[0].stream.headers['content-type'];
                const fileName = req.file('file')._files[0].stream.filename;
                let docPath = `${req.params.userId}_${Math.floor(Date.now() / 1000)}_${fileName}`;

                let text = files[0].fd;
                const myArray = text.split("/assets");
                console.log(myArray[1]);

                const obj = Product.validation(req.body);
                if (obj.data2 != null) {
                    const data = await Product.create({
                        product: req.body.product,
                        price: req.body.price,
                        description:req.body.description,
                        category:req.body.category,
                        filepath: files[0].fd,
                        image:myArray[1],
                        file: files[0].filename,
                    });
                    
                    res.redirect("http://localhost:1337");
                }
                else {
                    const errorList = obj.err;
                    res.render("pages/addProduct", { err: errorList });
                }
            });
        }
        catch (err) { res.json({ msg: "err at catchh" }) }
    },
    addpage: function (req, res) { res.render("pages/addProduct", { err: null }) },
    get: async function (req, res) {
        try {
            const data = await Product.find();
            res.render("pages/showProduct", { data: data });
        } catch { res.json({ msg: "err at get" }) }
    },
    get: async function (req, res) {
        try {
            const data = await Product.find();
            res.render("pages/showproductUser", { data: data });
        } catch { res.json({ msg: "err at get" }) }
    },
   
   
    description:async function(req,res){
        try{
            let data = await Product.findOne({ _id: req.params.id });
            
            res.render("pages/description",{data:data});
           
        }
        catch (err) { res.json({ msg: "error at updatee" }) }
    },
    categoryE:async function (req, res) {
        try {
            let data = await Product.find({category:"Electronics"});
           
            res.render("pages/showProduct", { data: data });
        } catch { res.json({ msg: "err at get" }) }
    },
    categoryD:async function (req, res) {
        try {
            let data = await Product.find({category:"Dress"});
           
            res.render("pages/showProduct", { data: data });
        } catch { res.json({ msg: "err at get" }) }
    },
    categoryS:async function (req, res) {
        try {
            console.log("aa raha hai");
            let data = await Product.find({category:"Shoes"});
           
            res.render("pages/showProduct", { data: data });
        } catch { res.json({ msg: "err at get" }) }
    },
    categoryJ:async function (req, res) {
        try {
            let data = await Product.find({category:"Jwellery"});
           
            res.render("pages/showProduct", { data: data });
        } catch { res.json({ msg: "err at get" }) }
    },
}