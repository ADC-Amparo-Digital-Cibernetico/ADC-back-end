import express from 'express'

const app = express();

//mock 
const dadosadc = 



//criando rotas
app.get('/', (req, res) => {
    res.send('Olá, mundo');
});

app.get('/selecoes', (req, res) => {
    res.send('os dados serão preservados')
})


export default app