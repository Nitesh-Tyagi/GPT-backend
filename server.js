const express = require('express');
const app = express();
const port = 8000;

// Import the necessary libraries
const { WSNR } = require('wsnr');

// Create an instance of the speech recognition object
const recognition = new WSNR();

// Store the user's speech input
let userSpeech = '';

// Listen for the 'recognized' event when the user stops speaking
recognition.on('recognized', text => {
  userSpeech += text;
  console.log(`User input: ${userSpeech}`);
});

// Start the speech recognition when the trigger word is detected
recognition.on('wake-word', () => {
  console.log('Listening for user input...');
});

// Pause the speech recognition after a pause of 3 seconds
recognition.on('silence', () => {
  recognition.stop();
  console.log('Speech recognition paused.');
});

// Set up the API endpoint to receive voice input
app.post('/api/voice-input', (req, res) => {
  // Start the speech recognition when the trigger word is detected
  recognition.start();
  res.status(200).json({ message: 'Listening for user input...' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
