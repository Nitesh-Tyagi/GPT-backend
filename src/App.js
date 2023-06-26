import React from 'react';

const App = () => {
  const handleVoiceInput = async () => {
    // Make a POST request to the backend API endpoint to initiate voice input
    try {
      const response = await fetch('/api/voice-input', {
        method: 'POST',
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Voice Interaction</h1>
      <button onClick={handleVoiceInput}>Start Voice Input</button>
    </div>
  );
};

export default App;
