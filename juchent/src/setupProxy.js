const proxy = require("http-proxy-middleware");
module.exports=function (app) {
    app.use("/home",proxy({
        target:"https://api.juooo.com/home/index",
        changeOrigin:true,
        pathRewrite:{
            "^/home":""
        }
    }))

}