import React from "react";
import { Router, match, RoutingContext } from "react-router";
import compress from 'compression';
import uuid from 'uuid';
import routes from "../shared/routes/routes";
import ReactDOMServer from "react-dom/server";
import exphbs from "express-handlebars";
import express from 'express';

var app = express();
exphbs.create({});
app.set('port', (process.env.PORT || 8083));

app.use(compress());
app.enable('view cache');
app.set('views', './src/server/views');
app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs',
  layoutsDir:"src/server/views/layouts/"
  }));
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.static('src/server/resources'));

app.get('/*', function (req, res) {
 match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
   if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      let content = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);
      const templateProps = {
        content: content,
        jsUrl: '//localhost:8082',
        version: '?v=' + uuid.v4()
      };
      res.render('index', templateProps);
    } else {
      res.status(404).send('Not found')
    }
 });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
