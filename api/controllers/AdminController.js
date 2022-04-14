/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  show:async function(req,res){
     
      const data = await Product.find({})
      res.render("pages/adminhome",{data:data});
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

        if (data) {
            await Product.updateOne({ _id: req.params.id }, {
                product: req.body.product,
                price: req.body.price,
                description:req.body.description,
                image:myArray[1]
            });
            res.redirect('/product');
        }
        else { res.json({ msg: "err at update" }) };
    });
    } catch (err) { res.json({ msg: "error at updatee" }) }
},
delete: async function (req, res) {
    try {
        let data = await Product.findOne({ _id: req.params.id });
        await Product.destroy({ _id: req.params.id }, function (err) {
            if (err) {
                res.redirect("/product");
            } else {
                res.redirect("/product");
            }
        });
    } catch { res.json({ msg: "ree at delete" }) }
},

};

