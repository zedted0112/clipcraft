console.log("Testing transcript extraction...");

const extractTranscript = require('../services/extractTranscript');

(async () => {
  try {
    const transcript = await extractTranscript('https://youtu.be/qr0wyKbm7m4');
    console.log('Transcript:', transcript);
  } catch (error) {
    console.error('Test error:', error.message);
  }
})();