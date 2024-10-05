import React, { useEffect } from 'react';

const WaitPage = ({ onRedirect }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRedirect(); // Chama a função para redirecionar para a página de pesquisa
    }, 10000);

    return () => clearTimeout(timeoutId); // Limpa o timeout se o componente for desmontado antes do tempo limite
  }, [onRedirect]);

  return (
    <div className="temp-thank-you-page">
      <h2>Agradecemos pelo seu feedback!</h2>
      <p>Aguarde 10 segundos...</p>
    </div>
  );
};

export default WaitPage;
