const proxy = require("http-proxy-middleware");
module.exports=function (app) {
    app.use("/home",proxy({
        target:"https://api.juooo.com/home/index",
        changeOrigin:true,
        pathRewrite:{
            "^/home":""
        }
    }));

    //ShowLibrary用  演出表 类型
    app.use("/ShowTpeList",proxy({
        target:"https://m.juooo.com",
        changeOrigin: true,
        pathRewrite:{
            "^/ShowTpeList":""
        }
    }));
    //演出类型
    app.use("/ShowList",proxy({
        target:"https://api.juooo.com/",
        changeOrigin: true,
        pathRewrite:{
            "^/ShowList":""
        }
    }))

};

   

