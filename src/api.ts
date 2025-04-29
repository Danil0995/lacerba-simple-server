// GESTIONE DEL SERVER CON LE API WEB (PIù USATO) 
import express from 'express';


const app = express();
app.use(express.json()); // Per leggere correttamente il body JSON

// POST /stats
app.post('/stats', (req, res) => {
    const numbers: number[] = req.body;


    // Validazione base
    if (!Array.isArray(numbers) || numbers.some(n => typeof n !== 'number')) {
        return res.status(400).json({ error: 'Il body deve essere un array di numeri' });
    }

    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const average = numbers.length > 0 ? sum / numbers.length : 0;

    return res.json({ media: average, somma: sum });
});





const port = 3000;

app.get('/', (req, res) => {
    res.send('API pronta. Usa POST /stats con un array di numeri.');
});

app.listen(port, () => {
    console.log(`API stats in ascolto su http://localhost:${port}`);
});
