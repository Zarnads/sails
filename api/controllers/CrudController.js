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

                const obj = Product.validation(req.body);
                if (obj.data2 != null) {
                    const data = await Product.create({
                        product: req.body.product,
                        price: req.body.price,
                        filepath: files[0].fd,
                        file: files[0].filename,
                    });

                    res.redirect("http://localhost:1337/Crud/get");
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
    updateOne: async function (req, res) {
        try {
            let data = await Product.findOne({ _id: req.params.id });
            if (data) { res.render("pages/updateproduct", { data }); }
            else { msg: "erra at updateOne " }
        }
        catch (err) { res.json({ msg: err }) }
    },
    update: async function (req, res) {
        try {
            let data = await Product.findOne({ _id: req.params.id });
            if (data) {
                await Product.updateOne({ _id: req.params.id }, {
                    product: req.body.product,
                    price: req.body.price,
                });
                res.redirect('/Crud/get');
            }
            else { res.json({ msg: "err at update" }) };
        }
        catch (err) { res.json({ msg: "error at updatee" }) }
    },
    delete: async function (req, res) {
        try {
            let data = await Product.findOne({ _id: req.params.id });
            await Product.destroy({ _id: req.params.id }, function (err) {
                if (err) {
                    res.redirect("/Crud/get");
                } else {
                    res.redirect("/Crud/get");
                }
            });
        } catch { res.json({ msg: "ree at delete" }) }
    },
    description:async function(req,res){
        try{
            let data = await Product.findOne({ _id: req.params.id });
            res.render("pages/description",{data:data});
           
        }
        catch (err) { res.json({ msg: "error at updatee" }) }
    },
    cart:async function(req,res){
        try{
            let data = await Product.findOne({ _id: req.params.id });
            
            res.render("pages/cart",{data:data});
           
        }
        catch (err) { res.json({ msg: "error at updatee" }) }
    }
}