import React, { useEffect } from 'react';

const ThankYouPage = ({ onRedirect }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRedirect(); // Chama a função para redirecionar para a página de pesquisa
    }, 9999999);

    return () => clearTimeout(timeoutId); // Limpa o timeout se o componente for desmontado antes do tempo limite
  }, [onRedirect]);

  return (
    <div className="thank-you-page">
      <h2>Obrigado pelo seu feedback!</h2>
      <p>Você será redirecionado de volta em 10 segundos.</p>
    </div>
  );
};

export default ThankYouPage;
