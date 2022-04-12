/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    cart:async function(req,res){
        try{
            let data = await Product.findOne({ _id: req.params.id });
            await Cart.create({
                 product:data.product,
                 price:data.price,
                 image:data.image

            })
            let data2 = await Cart.find({});
             console.log(data2.image);
            res.render("pages/cart",{data2:data2});
           
        }
        catch (err) { res.json({ msg: "error at cart" }) }
    },
    getcart:async function(req,res){
        try{
            let data2 = await Cart.find({});
         
            res.render("pages/cart",{data2:data2});
           
        }
        catch (err) { res.json({ msg: "error at getcart" }) }
    },
    delete: async function (req, res) {
        try {
            let data = await Cart.findOne({ _id: req.params.id });
            await Cart.destroy({ _id: req.params.id }, function (err) {
                if (err) {
                   res.redirect("/deleted");
                } else {
                    res.redirect("/deleted");
                }
            });
        } catch { res.json({ msg: "ree at delete" }) }
    },
    deleteall: async function (req, res) {
        try {
            let data = await Cart.find({});
            await Cart.destroy({}, function (err) {
                if (err) {
                   res.redirect("/deleted");
                } else {
                    res.redirect("/deleted");
                }
            });
        } catch { res.json({ msg: "ree at delete" }) }
    },
    buy:async function(req,res){
        try{
            let data2 = await Cart.find({});
            res.render("pages/buy",{data2:data2});
           
        }
        catch (err) { res.json({ msg: "error at buy" }) }
    }

};

