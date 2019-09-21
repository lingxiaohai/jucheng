const proxy = require("http-proxy-middleware");
module.exports=function (app) {
    app.use("/home",proxy({
        target:"https://api.juooo.com/home/index",
        changeOrigin:true,
        pathRewrite:{
            "^/home":""
        }
    }));
    app.use("/logins",proxy({
        target: "http://127.0.0.1",
        changeOrigin:true,
        pathRewrite: {
            "^/logins":""
        }
    }))
}