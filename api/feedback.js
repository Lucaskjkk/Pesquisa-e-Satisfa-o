// pages/api/feedback.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const feedbackData = req.body; // Os dados do feedback estarão no corpo da solicitação POST
        // Aqui você pode fazer o que quiser com os dados, como armazená-los em um banco de dados, etc.
  
        // Responder com sucesso
        res.status(200).json({ success: true });
      } catch (error) {
        console.error('Erro ao processar o feedback:', error);
        res.status(500).json({ success: false, error: 'Erro interno do servidor' });
      }
    } else {
      // Método não permitido
      res.status(405).json({ success: false, error: 'Método não permitido' });
    }
  }
  