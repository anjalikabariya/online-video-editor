import { useRef } from "react";

const VideoPlayer = ({ src }) => {
    const videoref = useRef(null)
    return(
        <div>
            {src ? (<video ref={videoref} controls src={src}></video>) : (<p>Upload Video</p>)}
        </div>
    )
}

export default VideoPlayer
