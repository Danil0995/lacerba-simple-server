// SERVER SIDE RENDERING CLASSICO

import express from 'express';
// inizializza server 

const app = express();

app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.headers);
    return res.send('<h1>Hello World!</h1> <p>Questo è il nostro primo server</p>');
});

// implementato nuovo get per la pagina about
app.get('/about', (req, res) => {
    return res.send('<h1>About</h1>');
});

// get per pagina not found 
// * prende tutte le pagine che non corrispondono a quelle definite sopra
app.get('*', (req, res) => {
    return res.status(404).send('<h1>Page not found</h1>');         
}
);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});