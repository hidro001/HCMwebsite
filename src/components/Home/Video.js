import VideoComponent from "./VideoComponent";
import Thumbnail from "../../assets/images/Thumbnail.webp"


<VideoComponent 
  videoSrc="" 
  thumbnailSrc={Thumbnail} 
  playButton={
    <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
      <span className="text-white text-2xl">▶</span>
    </div>
  }
/>
