const generateFakeShorts = require('../services/generateFakeShorts');

const generateShorts = (req, res) => {
  const { videoUrl } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: "videoUrl is required" });
  }

  const shorts =generateFakeShorts(videoUrl);
  

  res.status(200).json({
    message: "Shorts generated successfully (dummy)",
    data: shorts,
  });
};

module.exports = {
  generateShorts,
};