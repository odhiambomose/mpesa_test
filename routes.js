const router=require("express").Router();
const nodemailer = require("nodemailer");


router.post("/chat",async (req , res)=>{
 const transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 587,
     
     auth: {
       user: 'lorinesotile', 
       pass:  'nlphzoepyvmcgjks'
       
    },
    // 0703840365
   });
 async function run() {

   let infoContent = await transporter.sendMail({
     from: `${req.body.name} <${req.body.email}>`, 
     to: "lorinesotile@gmail.com", 
     subject:`${req.body.category}`, 
     text:`${req.body.message}`, 
     html:`<div><p>${req.body.name}<br/>${req.body.phonenumber}<br/>${req.body.message}</p></div>`,
  })

res.status(200).json(infoContent)
 }
run()
})
// sendMail 
router.post("/order",async (req , res)=>{
  const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      
      auth: {
        user: 'lorinesotile', 
        pass:  'nlphzoepyvmcgjks'
        
     },
     // 0703840365
    });
  async function run() {
 
    let infoContent = await transporter.sendMail({
      from: `${req.body.clientName}`, 
      to: "lorinesotile@gmail.com", 
      subject:`${req.body.productPrice}`, 
      // text:`${req.body.message}`, 
      html:`<div><p>${req.body.clientName}<br/>${req.body.phoneNumber}<br/>${req.body.location}<br/>${req.body.productColor}<br/>${req.body.productSize}<br/>${req.body.productQuantity}<br/>${req.body.productPrice}</p></div>`,
   })
 
 res.status(200).json(infoContent)
  }
 run()
 })

module.exports=router;