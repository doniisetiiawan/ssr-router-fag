import { StaticRouter } from 'react-router-dom';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../shared/App/App';

const PORT = process.env.PORT || 3001;

const app = express();

app.get('*', (req, res) => {
  const context = {};
  const reactMarkup = ReactDOMServer.renderToString(
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>,
  );

  if (context.url) {
    res.redirect(context.status, `http://${req.headers.host}${context.url}`);
  } else {
    res.send(`
        <!DOCTYPE HTML>
        <html>
            <head>
                <title>React SSR example</title>
            </head>
            <body>
            <main id='app'>${reactMarkup}</main>
            </body>
        </html>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`SSR React Router app running at ${PORT}`);
});
