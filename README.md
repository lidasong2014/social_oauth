node_social_oauth
=================

新浪微博、人人网、QQ等第三方Oauth授权

* 通过微博注册的应用获取client_id、app_key、app_secret、redirect_uri
* 由上面的参数授权获取code值
* 再通过code和上面的client_id、app_key、app_secret、redirect_uri获取access_token
