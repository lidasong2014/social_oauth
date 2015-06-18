module.exports = {
    "sina" : {
      "client_id" : 3026816424,
      "app_key" : 3026816424,
      "app_secret" : "52b94d696345d2195a6e21a1bf060456",
      "redirect_uri" : "http://127.0.0.1/home",
    },
    "renren" : {
      "client_id" : "appkey",
      "app_key" : "appkey",
      "app_secret" : "appsecret",
      "redirect_uri" : "http://test.com/renren_auth_cb"
    },
    "qq" : {
      "client_id" : "appid",
      "app_key" : "appkey",
      "redirect_uri" : "http://test.com/qq_auth_cb"
    }
}
//获取access_token
//https://api.weibo.com/oauth2/access_token?client_id=3026816424&client_secret=52b94d696345d2195a6e21a1bf060456&grant_type=authorization_code&redirect_uri=http://127.0.0.1/home&code=73924092eb83e11e1e0aaba0cf4d5c08
//获取到的code
/*
  "code":"7164db2da4b6ffda88337e3b82ab13f0"
  "access_token":"2.00LYM7EDkNNqSD8367cdab29qSMCDB"
 */