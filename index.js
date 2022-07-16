import app from './src/app.js';

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor ativo e escutando em http://localhost:${port}`);
})