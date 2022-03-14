/**
 * CrudController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


module.exports = {
    create: async function (req, res) {
        try {
            const data = await Product.create({
                product: req.body.product,
                price: req.body.price,
                image: req.body.image

            });
            res.redirect("http://localhost:1337/Crud/get")
        }
        catch (err) { res.json({ msg: err }) }
    },

    get: async function (req, res) {
        try {
            const data = await Product.find();
            res.render("pages/showProduct", { data: data });
        } catch { res.json({ msg: "err at get" }) }
    },

    updateOne: async function (req, res) {
        console.log(req.params.id);
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
    }
}