import { useState } from "react";

const VideoUploader = () => {
    const [video, setVideo] = useState(null)

    const handleUpload = (event) => {
        setVideo(event.target.files[0])
    }
    
    return (
        <div>
            <input type="file" accept="video/*" onChange={handleUpload}/>
            {video && <p>Selected Video: {video.name}</p>}
        </div>
    )
}

export default VideoUploader