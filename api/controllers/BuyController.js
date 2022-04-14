/**
 * BuyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
      checkout:async function(req,res){
          
        let data2 = await Cart.find({});
        const arr = [];
        for (let i in data2) {
             arr.push(data2[i].product);
          };
          console.log(arr);
          
          const data = await Buy.create({
         
              firstname:req.body.firstname,
              email:req.body.email,
              address:req.body.address,
              city:req.body.city,
              state:req.body.state,
              zip:req.body.zip,
              cardname:req.body.cardname,
              cardnumber:req.body.cardnumber,
              expmonth:req.body.expmonth,
              expyear:req.body.expyear,
              cvv:req.body.cvv,
              buyid:req.params.id,
              buiedproduct:arr
              
          })
          res.send("success you will recieve your parcel till one week ")
      },
     

};

