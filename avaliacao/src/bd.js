const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tew@1998',
  database: 'avaliacao',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    process.exit(1);
  } else {
    console.log('Conectado ao MySQL');
  }
});

app.post('/api/feedback', (req, res) => {
  const { rating } = req.body;
  const sql = 'INSERT INTO avaliacao (Avaliacao, data_avaliacao) VALUES (?, NOW())';


  connection.query(sql, [rating], (err, result) => {
    if (err) {
      console.error('Erro ao inserir feedback no banco de dados:', err);
      res.status(500).send('Erro ao inserir feedback no banco de dados');
    } else {
      res.status(200).send('Feedback inserido com sucesso');
    }
  });
});

app.get('/api/feedback', (req, res) => {
  const sql = 'SELECT * FROM avaliacao';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar feedbacks no banco de dados:', err);
      res.status(500).send('Erro ao buscar feedbacks no banco de dados');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
