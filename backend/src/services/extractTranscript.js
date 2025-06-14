const { getTranscript } = require("youtube-transcript-api");

const extractTranscript = async (videoId) => {
  try {
    const transcript = await getTranscript(videoId);
    return transcript; // [{ text, start, duration }]
  } catch (error) {
    throw new Error("Failed to fetch transcript: " + error.message);
  }
};

module.exports = extractTranscript;