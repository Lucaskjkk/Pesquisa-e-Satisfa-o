import React, { useState } from 'react';


const SurveyPanel = ({ onSubmit }) => {
  const [experience, setExperience] = useState('');

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleSubmit = () => {
    // Valide se a experiência foi selecionada antes de enviar
    if (experience) {
      onSubmit({ experience });
      // Limpe o estado após enviar
      setExperience('');
    }
  };

  return (
    <div>
      
</div>
  );
};

export default SurveyPanel;
