/**
 * CrudController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
    create: async function (req, res) {
        try{
            const data = await Crud.create({
       
            product:req.body.product,
            price:req.body.price
        
        });
        console.log(data);
        res.redirect("http://localhost:1337/Crud/get")
       
}
        catch(err){res.json({msg:err})}
    },

    get: async function(req,res){
        try{
            const data =  await Crud.find();
            res.render("pages/show",{data:data});
     }catch{res.json({msg:"err at get"})}
       
    },
    updateOne:async function(req,res){
        console.log(req.params.id);
        try{let data = await Crud.findOne({_id:req.params.id});

            if(data){res.render("pages/update", {data});}
            else{msg:"erra at updateOne "}
    }
        catch(err){res.json({msg:err})}

        console.log("thik hai")
    },

    update:async function(req,res){
        try{
            console.log("hey")
            const id = req.params.id;
            
         let data = await Crud.findOne({_id:req.params.id});
         
         if(data){
            
             await Crud.updateOne({_id:req.params.id},{
                 product:req.body.product,
                 price:req.body.price,
             });
             
             res.redirect('/Crud/get');
         } 
         else{res.json({msg:"err at update"})} ;
            
        }
        catch(err){res.json({msg:"error at updatee"})}
    },
    delete:async function(req,res){
        try{
            console.log("heyyya");
            
            let data = await Crud.findOne({_id:req.params.id});
            console.log(data);
            console.log(req.params.id);
            
            await Crud.destroy({_id:req.params.id}, function(err){
                if(err){
                    res.redirect("/Crud/get");
                } else {
                    res.redirect("/Crud/get");
                }
             });
          
        }catch{res.json({msg:"ree at delete"})}

    }
    
       
       
    



}