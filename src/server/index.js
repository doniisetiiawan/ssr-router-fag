import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.get('*', (req, res) => {
  res.send(`
        <!DOCTYPE HTML>
        <html>
            <head>
                <title>React SSR example</title>
            </head>
            <body>
                <main id='app'>Rendered on the server side</main>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
  console.log(`SSR React Router app running at ${PORT}`);
});
