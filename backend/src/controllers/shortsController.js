const extractTranscript = require("../services/extractTranscript");
const extractVideoId = require("../utils/extractVideoId");

const generateShorts = async (req, res) => {
  const { videoUrl } = req.body;
  console.log("Received video URL:", videoUrl);

  const videoId = extractVideoId(videoUrl);
  if (!videoId) {
    return res.status(400).json({ message: "Invalid YouTube URL" });
  }

  try {
    const transcript = await extractTranscript(videoId);

    return res.status(200).json({
      message: "Transcript fetched successfully",
      data: transcript,
    });
  } catch (error) {
    console.error("Transcript error:", error.message);
    return res.status(500).json({ message: "Failed to fetch transcript" });
  }
};

module.exports = { generateShorts };