import React from "react";
import compress from 'compression';
import uuid from 'uuid';
import ReactDOMServer from "react-dom/server";
import exphbs from "express-handlebars";
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from '../shared/controllers/AppController'

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

app.get('*', function (req, res) {
  const context = {};
  const content = ReactDOMServer.renderToString(
		<StaticRouter location={ req.url } context={ context }>
			<App />
		</StaticRouter>
	);
  const templateProps = {
    content: content,
    jsUrl: process.env.NODE_ENV === 'prod' ? '' : '//localhost:8082',
    version: '?v=' + uuid.v4()
  };
  res.render('index', templateProps);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'), process.env.NODE_ENV);
});
