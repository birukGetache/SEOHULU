// server.js
const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const App = require('./src/App').default; // Adjust the path if needed

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/*', (req, res) => {
  const context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HULU GENERAL COMMISSIONS</title>
        <meta name="description" content="Learn more about HULU General Commissions.">
        <meta name="keywords" content="about, Hulu, general commissions">
        <meta property="og:title" content="HULU GENERAL COMMISSIONS" />
        <meta property="og:description" content="Learn more about HULU General Commissions." />
        <link rel="stylesheet" href="/static/css/main.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/js/bundle.js"></script>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
