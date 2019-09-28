const express = require("express");
const bodyParser = require('body-parser');
const db = require("./module/db");
const tools = require("./module/tools");
const app = express();
app.use(bodyParser.json());
app.post("/adminLogin",async function (req,res) {
   const {adminName,passWord} = req.body;
   const data = await db.findOne("adminList",{
       adminName,
       passWord
   })
   if(data){
        res.json({
            ok:1,
            adminName,
            msg:"登陆成功"
        })
   }else{
       res.json({
           ok:-1,
           msg:"账号或密码错误"
       })
   }
});
app.listen(80,function () {
    console.log("success");
})