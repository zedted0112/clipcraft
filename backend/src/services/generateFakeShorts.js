

function generateFakeShorts(videoUrl) {
    return [
      {
        id: 1,
        title: "Nature Clip",
        url: "https://www.w3schools.com/html/mov_bbb.mp4", // Direct playable MP4
      },
      {
        id: 2,
        title: "City Clip",
        url: "https://www.w3schools.com/html/movie.mp4",
      },
    ];
  }
  
  module.exports = generateFakeShorts;