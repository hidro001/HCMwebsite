import { useRef, useState } from "react";

const VideoComponent = ({ videoSrc, thumbnailSrc, playButton }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-2 sm:px-4 lg:px-6">
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
        {/* Video Element */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full"
          controls={isPlaying}
        />

        {/* Thumbnail Overlay (Visible until video starts playing) */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 cursor-pointer z-10"
            onClick={handlePlay}
          >
            {/* Background Thumbnail */}
            {thumbnailSrc && (
              <img 
                src={thumbnailSrc} 
                alt="Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Custom or Default Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              {playButton ? (
                playButton
              ) : (
                <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="white" 
                    className="w-12 h-12 ml-2"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
