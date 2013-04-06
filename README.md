# rAppid.js-server - a nodejs render server for rAppid.js application

This project is deprecated and has been replaced with the server shipped with [rAppid.js](https://github.com/it-ony/rAppid.js).

If you haven't set up the project with the `rappidjs create app` command, create the following directory structure.

```
/
    node_modules/
        rAppid.js/
            js
            srv  <--I
    public/         I
        js  <----I  I
        app <-I  I  I
    server    I  I  I
        app --I  I  I
        js ------I  I
        srv --------I
        web/
            Server.xml
```

The Server.xml looks the following
```
<Server xmlns="srv.core"
        xmlns:handler="srv.handler" xmlns:endpoint="srv.endpoint">

    <EndPoints>
        <endpoint:HttpEndPoint port="8000"/>
    </EndPoints>

    <Filters>
    </Filters>

    <Handlers>
        <handler:NodeRenderingHandler application="app/MyApp.xml"/>
        <handler:StaticFileHandler/>
    </Handlers>
</Server>
```

Start the server with `rappidjs server /path/to/server/dir`

If you deliver you application files with your favorite web server (e.g. apache2) you need to rewrite
to traffic containing the GET parameter _escaped_fragment_. See the mod_rewrite example for apache below.

```
# Proxy pass urls containing _escaped_fragment_
RewriteCond %{QUERY_STRING} _escaped_fragment_
RewriteRule ^.*$ http://localhost:8001/ [QSA,L,P]
```