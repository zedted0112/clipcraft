// controller to handle shorts generation

exports.generateShorts = (req,res)=>{
    const{youtubeUrl} = req.body;

    if(!youtubeUrl){
        return res.status(400).json({
            error: "YouTube URL is required"
        })
    }

// dummy data for now will replace with rhea's AI soon
const dummyClips = [
    { start: 10, end: 40, caption: "🔥 Great moment here!" },
    { start: 60, end: 90, caption: "😂 Funny reaction!" }
  ];

  res.json({
    source: youtubeUrl,
    generated: dummyClips,
    message: "Clips generated successfully 🧪✨"
  });
};