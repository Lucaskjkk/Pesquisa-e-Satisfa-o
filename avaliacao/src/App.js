import React, { useState, useEffect } from 'react';
import SurveyPanel from './SurveyPanel';
import axios from 'axios';
import ThankYouPage from './ThankYouPage';
import WaitPage from './WaitPage';

import otimo from "./img/Ótima.png";
import boa from "./img/Boa.png";
import regular from "./img/Regular.png";
import ruim from "./img/Ruim.png";
import pessima from "./img/Péssima.png";
import wet from "./img/wetnwild.png";

function App() {
  const [surveyData, setSurveyData] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showTempThankYou, setShowTempThankYou] = useState(false);

  const handleSurveySubmit = async (rating) => {
    try {
      const response = await axios.post('http://localhost:3001/api/feedback', { rating });

      if (response.status === 200) {
        console.log('Feedback enviado com sucesso!');
        setShowTempThankYou(true);

        // Não há necessidade de redirecionamento aqui, pois o componente WaitPage cuidará disso

      } else {
        console.error('Erro ao enviar feedback:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3001/api/feedback')
      .then(response => setSurveyData(response.data))
      .catch(error => console.error('Erro ao obter feedbacks:', error));
  }, []);

  const handleRedirect = () => {
    setShowTempThankYou(false);
    setShowThankYou(true);

    setTimeout(() => {
      setShowThankYou(false);
      // Pode adicionar redirecionamento ou outra lógica aqui
    }, 10000);
  };

  return (
    <div className="App">
      <header>
        <section className='wet'>
          <img src={wet} alt="wetnwild"></img>
        </section>
      </header>

      <SurveyPanel onSubmit={handleSurveySubmit} />
      <main className='emojis'>
        <h1>O que achou do nosso atendimento ?</h1>
        {/* Adicione um link para cada imagem */}
        <a href="/wait-page">
          <img src={pessima} alt="Péssima" onClick={() => handleSurveySubmit({ rating: 'pessima' })} />
        </a>
        <a href="/wait-page">
          <img src={ruim} alt="Ruim" onClick={() => handleSurveySubmit({ rating: 'ruim' })} />
        </a>
        <a href="/wait-page">
          <img src={regular} alt="Regular" onClick={() => handleSurveySubmit({ rating: 'regular' })} />
        </a>
        <a href="/wait-page">
          <img src={boa} alt="Boa" onClick={() => handleSurveySubmit({ rating: 'boa' })} />
        </a>
        <a href="/wait-page">
          <img src={otimo} alt="Ótima" onClick={() => handleSurveySubmit({ rating: 'ótima' })} />
        </a>
      </main>

      {showTempThankYou && <WaitPage onRedirect={handleRedirect} />}
      {showThankYou && <ThankYouPage onRedirect={handleRedirect} />}
    </div>
  );
}

export default App;
